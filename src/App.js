import logo from './logo.svg';
import './App.css';
import React from 'react';
import Icon from '@material-ui/core/Icon';

class Header extends React.Component{
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>This the to DO app homework</code>
        </p>
      </header>
    </div>
  );
  }
}
class Body extends React.Component{
  render() {
    return (
      <div>
        <p>this is the body</p>
      </div>
    );
  }
}
class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <div className="nav">
        <div className="left">
          <a className="App-link text-left"
            href=" "
            target="_blank"
            rel="noopener noreferrer">
            <Icon>arrow_left</Icon>
            Previous Work
          </a>
        </div>
        <div className="next">
          <a className="App-link text-right"
            href=" "
            target="_blank"
            rel="noopener noreferrer">
            Next Work
            <Icon>arrow_right</Icon>
          </a>
        </div>
      </div>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
