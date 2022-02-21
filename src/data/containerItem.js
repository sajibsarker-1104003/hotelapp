import React from 'react';
import {Card,CardBody,CardTitle} from 'reactstrap';

const ContainerItem=props =>{
  //console.log(props.dish);
  return(
    <div>
      <Card style={{margin:"10px"}}>
        <CardBody>          
            <CardTitle style={{cursor:"pointer"}} onClick={()=>props.DishSelect(props.dish)}>
              Hotel:{props.dish}
            </CardTitle>
            <h1>City:{props.district}</h1>
            <h2>Area:{props.upzila}</h2>
            <p>Rating:{props.rating}</p>
                    
        </CardBody>
      </Card>

    </div>);
}
export default ContainerItem;