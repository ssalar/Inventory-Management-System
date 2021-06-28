import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text = "salar" number = {2}/>
      <AddItem text = "tim"/>
      <AddItem text = "test"/>
    </div>
  );
}


function AddItem(props){
  const value = props.text;
  return (
    <form>
      <label for="text-form">Type somthing: </label>
      <input type="text" value= {value} id = "text-form"></input>
    </form>
  );
}

export default App;
