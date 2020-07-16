import React from "react";
import { Pagination } from "react-bootstrap";

class ButtonContainer extends React.Component{
  render(){
    const { pagination, action, getPage } = this.props;
    const totalItems = Math.ceil(pagination.count / 10)
    const items = []
    for(let i=1; i <= totalItems; i++){
      items.push(<Pagination.Item key={i} onClick={() => action(i)}>{i}</Pagination.Item>)
    }
    return(
      <div>
        <Pagination>
          <Pagination.Prev disabled={pagination.previous ?  false : true} onClick={() => getPage(pagination.previous)}/>
          {items}
          <Pagination.Next disabled={pagination.next ?  false : true} onClick={() => getPage(pagination.next)}/>
        </Pagination>
      </div>
    );
  }
}

export default ButtonContainer
