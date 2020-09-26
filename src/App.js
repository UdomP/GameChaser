import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Blank from './blank.js';
import Registration from './Registration.js';

function btPress() {
    alert('Code to do here!');
}





class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  componentDidMount= async()=>{
    this.setState({loaded:true})
}
  render(){
    const items = this.props.tableInfo;

    const itemList = items.map((items,index) =>

    <tr key={index}>
    <td>{items.Game.toString()}</td>
    <td>{items.Name.toString()}</td>
    <td>{items.Size.toString()}</td>
    <td>{items.Time.toString()}</td>
    <td>{items.Notes.toString()}</td>
  </tr>);



  return (

    <div className="App">
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

        <div className="Home-table">
          <table style={{width:"100%",border: "1px solid black",borderCollapse: "collapse"}} >
              <tr>
                <th>Game</th>
                <th>Name</th>
                <th>Size</th>
                <th>Time</th>
                <th>Notes</th>
              </tr>
              {this.state.loaded ?
              <React.Fragment>
                  {itemList}
                  </React.Fragment>
                :<div></div>
                }
          </table>
        </div>




    </div>
  );
}

}




export default App;
