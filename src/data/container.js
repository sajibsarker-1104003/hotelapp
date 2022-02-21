import React,{Component} from "react";
import ContainerItem from "./containerItem";
import ContainerDetail from "./containerDetail";
import {CardColumns,Modal,ModalBody,ModalFooter,Button} from 'reactstrap';
import axios from 'axios';


class Container extends Component {
   state={
     data:[],    
    selectedContainer:null,
    modalOpen:false
  }
  componentDidMount(){
axios.post('https://beta.extranet.tripguru.com.bd/api/property/booking/search_properties',{
      "location_type": "district",
      "location_id": 1,
      "start_date": "2022-02-22",
      "end_date": "2022-02-23",
      "offset": 0,
      "limit": 30
  }
  )
  .then(response=>{
    const data=response.data.data.properties;
    //console.log(data);
    this.setState({data});
   
  })
}
  onContainerSelect=dish=>{
    console.log(dish);
    this.setState({
      selectedContainer:dish,
      modalOpen:!this.state.modalOpen
    });

  }
  toggleModal=()=>{
    this.setState({
      modalOpen:!this.state.modalOpen
    })
  }
  render(){
    const info=this.state.data.map(item=>{
     //console.log(item);
      return(<ContainerItem dish={item.name}
         rating={item.rating}
         district={item.district_name}
         upzila={item.thana_name}
         breakfast={item.property_breakfast}
        key={item.id} 
        DishSelect={this.onContainerSelect}/>
        );
    })
    //console.log(info);
    let dishDetail=null;
    if(this.state.selectedContainer!=null){
      dishDetail=<ContainerDetail dish={this.state.selectedContainer}/>
    }
    //console.log(dishDetail);
    return (
      <div className="container" >
        <div className="row">
         <CardColumns>
           {info}
         </CardColumns>
         <Modal isOpen={this.state.modalOpen} onClick={this.state.toggleModal}>
           <ModalBody>
             {dishDetail}
             
             
           </ModalBody>
           <ModalFooter>
             <Button color="secondary" onClick={this.toggleModal}>Close</Button>
           </ModalFooter>
           </Modal>           

        </div>

      </div>
      )}
}
export default Container;