import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
       </Layout>
      </div>
    )
  }
}

export default App;

/* GENERAL NOTES

- when passing a function to a child component in the tree via multiple props, that function can take an argument as long 
  as it's specified in the function declaration. Just pass this.functionName as a prop all the way to the child, but when
  calling it, call it as () => functionName(argument).

*/
