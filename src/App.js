import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}


function AddItem(){
  return (
    <form>
      <label for="text-form">Type somthing: </label>
      <input type="text" id = "text-form"></input>
    </form>
  );
}

export default App;
