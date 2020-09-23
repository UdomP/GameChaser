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
          
              <h1> GAME CHASERS!</h1>
              <h2>Region: NA</h2>

          </div>{/*End of header*/}

          <div className="App-searchbar">
             
            Search by game-
            <input type="text" />
              &emsp;
            Search by user- 
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
