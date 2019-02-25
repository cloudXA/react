// presentational component example
import React from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle} from 'reactstrap';




    function RenderDish ( {dish} ) {
        return(
            <div className="col-12 col-md m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
    }
            
     function RenderComment ({array}) {
       if(array != null) 
       return (
           <div className="col-12 col-md m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {array.map((item) =>{
                        return (
                            <li key={item.id}>
                                <p>{item.comment}</p>
                                <p>--{item.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                            </li> 
                            );
                
                    })}
                </ul>
            </div>
         )    
         
            else {
                return(
                    <div></div>
                );
            } 
    }   
    

    
    
   const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked')
        
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment array={props.dish.comments} />
                        </div>
                    </div>
                </div>
        );
    }
        else {
            return (
                <div></div>
            );
        }
    }
        
                
export default DishDetail;       
        
            
        


  
    
    