import React from 'react';
import {Card,CardImg,CardOverlay,CardBody,CardText,CardTitle,}from 'reactstrap';
const ContainerDetail=props=>{  
  //console.log(props); 
  return(
    <div>
     <Card style={{marginTop:"10px"}}>
         <CardBody style={{textAlign:"left"}}>
           <CardTitle>
             {props.dish}
              
                              
               
              
             
           </CardTitle>
           
         </CardBody>

     </Card>
    </div>);
}
export default ContainerDetail;