import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'


class App extends Component {
  
  

  constructor(props) {
    super(props);
console.log("aloading1");
    this.state = {
      dishes: DISHES
    };
  }

  render() {console.log("aloading2");
    return (
      
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* 将外来dish.js文件导入Menu类，充当paragraph */}
        <Menu dishes={this.state.dishes} />
      </div>
      
    );
  }
}

export default App;
