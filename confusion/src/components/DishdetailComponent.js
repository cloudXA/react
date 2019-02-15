// presentational component example
import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("menu constructor called");
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
            );
        else
            return (
                <div></div>
            );
        
    }
// 暂时无法调用renderComments()函数

    // renderComments(array) {
    //     if(array.length != 0)
    //         return (
    //             <div className="col-12 col-md-5 m-1">
    //                 <h4>Comments</h4>
    //                 {array.map(comment => (
    //                     <ul className="list-unstyled">
    //                         <li>
    //                             <p>{comment.comment}</p>
    //                             <p>--{comment.author}, {comment.date}</p>
    //                         </li>
    //                     </ul>
    //                 )
    //                 )}
    //             </div>
    //         )
                
    //     else
    //         return (
    //             <div></div>
    //         );
    // }

    
        // return (
        //         <div className="col-12 col-md-5 m-1">
        //            <Card key={dish.id}
        //                 onClick={() => this.onDishSelect(dish)}>
        //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
        //                 <CardImgOverlay>
        //                     <CardTitle>{dish.name}</CardTitle>
        //                 </CardImgOverlay>
        //             </Card> 
        //         </div>
        //     );
            
    render() {
        console.log("dloading");
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                {this.props.selectedDish && this.props.selectedDish.comments && <div  className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {this.props.selectedDish.comments .map((item)=>{
                        return (
                        <div key={item.id}>
                            <p>{item.comment}</p>
                            <p>---{item.author}, {item.date}</p>
                        </div>
                        )
                    })}
                </div>}
               
                   {/* {this.props.selectedDish.renderComments(this.props.selectedDish.comments)} 
                 */}
            </div>
        )
     }      
}    

                
                
export default DishDetail;