import { useState } from 'react';
import './App.css';
import Welcome from './component/welcome/Welcome'
import SearchInput from  './component/search/Input'

function App() {
  const [searchValue, setSearchValue] = useState("");

  const text = "hello world"
  return (
    <div className="App">
      <p> { text } </p>
      <SearchInput
        setSearchValue={ setSearchValue }
      />
      <p> Your search word is [ { searchValue } ] </p>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
