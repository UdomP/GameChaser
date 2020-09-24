import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

    const [sg, setGame] = useState(' ');
    const [su, setUser] = useState(' ');

    function btPress() {//sample code for testing purposes

        if ((sg == ' ') && (su == ' ')) {
            alert("Displaying all queries");
        }
        else if ((sg != ' ') && (su == ' ')) {
            alert("Search results for: " + sg + "; All users");
        }
        else if ((sg == ' ') && (su != ' ')) {
            alert("Search results for User: " + su);
        }
        else {
            alert("Search results for: " + sg + "; User: " + su);
        }
        setGame(' '); setUser(' ');

         //displaying results and clear the text inputs is where I'm stuck with React    

    }
  return (
  	
    <div className="App">
          <div className= "App-header" >
          
              <h1> GAME CHASERS!</h1>
              <h2>Region: NA</h2>

          </div>{/*End of header*/}

          <div className="App-searchbar">
             
              Search by game-
            <input type="resetText" onChange={ge => setGame(ge.target.value)} />
              &emsp;
            Search by user- 
            <input type="text" onChange={gc => setUser(gc.target.value)} />
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
