// presentational component example
import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



class DishDetail extends Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            selectedDish: null
        }
     }    
   

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }


    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
        


    renderComment(array) {
        if(array != null) {
            const items = array.map(item =>{
                return (
                    <li key={item.id}>
                        <p>{item.comment}</p>
                        <p>--{item.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                    </li> 
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {items}
                    </ul>
                </div>
            );
        }
            else {
                return(
                    <div></div>
                );
            }
    }    

    
    render() {
        
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComment(this.props.dish.comments)}
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
}         
                
export default DishDetail;