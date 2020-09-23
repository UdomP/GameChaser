import React from 'react';





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
  </tr>
  );


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
            {this.state.loaded ?
            <React.Fragment >
                {itemList}
                </React.Fragment>
              :<div></div>
              }
        </table> 
          
        </body>
    </div>
  );
}
}
export default App;
