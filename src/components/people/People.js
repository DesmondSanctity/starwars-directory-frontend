import React from "react";
//import components
import App from "../App";
import ButtonContainer from "../ButtonContainer";
import PeopleDetail from "./PeopleDetail";
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getPeople, getPage } from './peopleThunk';
import { Redirect } from 'react-router-dom';


//stylesheet
import "../../styles/sass/body.scss";
import "../../styles/sass/search.scss";


class People extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         people: false,
         redirect: false,
         search: '',
         setSearch: false,
         showDetails: false,
         peopleDetail: {}
      }
      this.onCellClick = this.onCellClick.bind(this);
      this.closeDetail = this.closeDetail.bind(this);
    }
    onCellClick(person){
        this.setState({
          peopleDetail: person,
          showDetails:true
        });
      }
    closeDetail(){
      this.setState({
        peopleDetail:{},
        showDetails:false
      })
    }
    setRedirect = () => {
     this.setState({
       redirect: true
     })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    }
    componentDidMount = () => {
      const { getPeople } = this.props;
      getPeople();
    }
    handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  };
    onSearch = (e) => { this.setState({ setSearch: true}) }
    renderTableData() {
    let { people } = this.props;
    let results = people.results;
    let { setSearch, search } = this.state;
     try {
       const searchRE = new RegExp(search, 'i');
       if(setSearch) {
         results = people.results.filter(person =>
           (person.name.match(searchRE) || person.gender === search//after string has been fully typed
       ))

     }}
       catch(err){ console.log(err) }
    if(results.length > 0)
      return results.map((person, data) => {
          const { name, birth_year, gender } = person //destructuring
          return (
            <tr key={data} onClick={() => this.onCellClick(person)}>
               <td>{name}</td>
               <td>{birth_year}</td>
               <td>{gender}</td>
            </tr>
         )
        })
    }
  render(){
    const  { people } = this.props;
    let pagination;
    if(people.results){
      pagination = {
        count: people.count,
        next: people.next,
        previous: people.previous,
        size: people.results.length
      }
    }
    const { showDetails, peopleDetail } = this.state;
    return(
     <div className="">
         <div className="body-head">
           <App />
           <div className="search-bar">
             <input type="text"  name='search' value={this.state.search} onChange={this.handleChange}  placeholder='search by name & gender' onKeyDown={(e) => this.onSearch(e)} />
             <div className="search"></div>
           </div>
         </div>
         <div className="container">
             {(!showDetails && people.count) &&
             <div className="body-container">
               <Table responsive striped bordered hover>
                 <thead >
                   <tr>
                     <th>FullName</th>
                     <th>Birth Year</th>
                    <th>Gender</th>
                  </tr>
               </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
              </Table>
              <ButtonContainer pagination={pagination} action={this.props.getPeople} getPage={this.props.getPage}/>
             </div>
           }
           {people.count && showDetails &&
             <div className="body-container-new">
               <div className="cancel" onClick={this.closeDetail}> Back to List </div>
               <PeopleDetail people={peopleDetail} />
             </div>
           }
           {(!people.count && !showDetails) &&
             <p>Loading...</p>
           }
         </div>
     </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.reducer.loading,
    people: state.reducer.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (page) => dispatch(getPeople(page)),
    getPage: (url) => dispatch(getPage(url)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);
