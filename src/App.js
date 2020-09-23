import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function btPress() {
    alert('Code to do here!');
}
function App() {

    
  return (
  	
    <div className="App">
          <div className= "App-header" >
          
                <h1 style={{display:"inline", alignItems:"center"}}> GAME CHASERS!</h1>
                
            
              <label style={{ display: "inline", float: "right" }}>Region: NA</label>

          </div>{/*End of header*/}

          <div className="App-searchbar">
             
            <a >Search by game</a>
            <input type="text" />
              &emsp;
            <a >Search by user</a>
            <input type="text" />
              &emsp;
            <Button variant="secondary" size="lg" onClick={btPress} > Search </Button>{''}
          </div> {/* End of searchbar */}

          <div className="App-table">
              
              <table style={{ width: "100%", border: "1px solid black", borderCollapse: "collapse" }} >
                  <tr>
                      <th>Game</th>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Time</th>
                      <th>Notes</th>
                  </tr>
              </table>
           </div>

        </div> /* End of App*/
  );
}

export default App;
