import React from "react";
//import components
import App from "../App";
import { connect } from 'react-redux';
import {  Table } from "react-bootstrap";
import { getStarships, getPage } from './starshipsThunk';
import { Redirect } from 'react-router-dom';
import ButtonContainer from "../ButtonContainer";
import StarshipDetail from "./StarshipDetail";


//stylesheet
import "../../styles/sass/body.scss";
import "../../styles/sass/search.scss";


class Starships extends React.Component{
  constructor(props) {
      super(props)
      this.state = { //state is by default an object
         starships: false,
         search: '',
         redirect: false,
         setSearch: false,
         showDetails: false,
         starshipDetail: {}
      }
      this.onCellClick = this.onCellClick.bind(this);
      this.closeDetail = this.closeDetail.bind(this);
    }
    onCellClick(person){
        this.setState({
          starshipDetail: person,
          showDetails:true
        });
      }
    closeDetail(){
      this.setState({
        starshipDetail:{},
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
      const { getStarships } = this.props;
      getStarships();
    }
    handleChange=(e)=>{
      this.setState({ [e.target.name]: e.target.value })
    };

    onSearch = (e) => { this.setState({ setSearch: true}) }


    renderTableData() {
      let { starships } = this.props;
      let results = starships.results;
      let { setSearch, search } = this.state;
       try {
         const searchRE = new RegExp(search, 'i');
         if(setSearch) {
           results = starships.results.filter(starship => {
             return starship.name.match(searchRE)})
           }
         }
         catch(err){ console.log(err) }
       if(results.length > 0)
        return results.map((starship, data) => {
         const { name, model, cargo_capacity } = starship //destructuring
         return (
            <tr key={data} onClick={() => this.onCellClick(starship)}>
               <td>{name}</td>
               <td>{model}</td>
               <td>{cargo_capacity}</td>
            </tr>
         )
      })
   }
  render(){
    const  { starships } = this.props;
    let pagination;
    if(starships.results){
      pagination = {
        count: starships.count,
        next: starships.next,
        previous: starships.previous,
        size: starships.results.length
      }
    }
    const { showDetails, starshipDetail } = this.state;
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
          {(!showDetails && starships.count) &&
         <div className="body-container">
           <Table  responsive striped bordered hover>
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Model</th>
                 <th>Cargo Capacity</th>
               </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
           </tbody>
           </Table>
           <ButtonContainer pagination={pagination} action={this.props.getStarships} getPage={this.props.getPage}/>
         </div>
       }
       {starships.count && showDetails &&
         <div className="body-container-new">
           <div className="cancel" onClick={this.closeDetail}> Back to List </div>
           <StarshipDetail starships={starshipDetail} />
         </div>
       }
       {(!starships.count && !showDetails) &&
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
    starships: state.reducer.starships,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStarships: (page) => dispatch(getStarships(page)),
    getPage: (url) => dispatch(getPage(url)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Starships);
