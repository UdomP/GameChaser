import React from 'react';



function App() {
  return (
  	
    <div className="App">
        <header >
          
                <h1 style={{display:"inline", alignItems:"center"}}>GAME CHASERS!</h1>
                
            
              <label style={{ display:"inline",float: "right"}}>Region: NA</label>
        </header>
        <body >
        <button type="button">Create Meetup</button> 
        <br/>
        <a >Search by game</a>
        <input type="text"/>
        <a >Search by user</a>
        <input type="text"/>
        
          <br/>
        <table style={{width:"100%",border: "1px solid black",borderCollapse: "collapse"}} >
            <tr>
              <th>Game</th>
              <th>Name</th>
              <th>Size</th>
              <th>Time</th>
              <th>Notes</th>
            </tr>
        </table> 
          
        </body>
    </div>
  );
}

export default App;
