import './App.css';

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

function Info(){
  const title = "This is my title."
  return (
    <div>
      {title}
      <h1>Inventory System</h1>
      <p>Manage Your stuff.</p>
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
