import './App.css';
import Welcome from './component/welcome'

function App() {
  const text = "hello world"
  return (
    <div className="App">
      <p> { text } </p>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
