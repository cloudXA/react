import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

// 加载顺序为loading1 (构造器)、loading4（render函数下menu）、loading3（render函数下）
class Menu extends Component {
    constructor(props) {
        console.log("loading1")
// props指的是dishes        
        super(props);
        console.log(props);
// this指的是Menu，state初始化为null，
        this.state = {
            selectedDish: null
        }
        
        console.log("Menu called")
    }
      
    componentDidMount() {
        console.log("menu componentDidMount called")
    }

// click 时，modify state，使得if条件变化
    onDishSelect(dish) {
        console.log("loading2");
        this.setState({ selectedDish: dish});
    }

    // renderDish(dish) {
// first 加载时，dish为null.然后 dish为clicked的card
    //     console.log("loading3");
    //     console.log(dish);
    //     if (dish != null)
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
                
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
            
    // }
// 展示在页面上
    render() {
        console.log("loading4");
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>    
            );
        });
        console.log(this.props);
    
// this.props指的是{dishes: Array(4)}然而this.props.dishes指的是dishes：[{},{},{},{}]数列
          
        return (
            <div className="container">
                <div className="row">                    
                    {menu}            
                </div>
                {/* <div className="row">
                    <div className="col-12 col-md-5 m-1">
                     {this.renderDish(this.state.selectedDish)}
                    </div>
                </div> */}
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;