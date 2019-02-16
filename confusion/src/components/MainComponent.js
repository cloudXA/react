import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'


class Main extends Component {

  constructor(props) {
    super(props);
    console.log('following is main inside');
    console.log(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null

    };
    console.log("following this.state.dishes");
    console.log(this.state.dishes);
    console.log("onclick following this.state.selectedDish");
    console.log(this.state.selectedDish);
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
      console.log("clicked follwing inside")
      console.log(dishId);
  }

  render() {
      console.log("mainloading2");
    return (
      
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
       
        <Menu dishes={this.state.dishes} 
            onClick={(dishId) =>this.onDishSelect(dishId)} /> 
        
        <DishDetail dish={this.state.dishes.filter((dish) =>
            dish.id === this.state.selectedDish)[0]} />
      </div>  
    )
    
  }
}           
      
      
   

export default Main;