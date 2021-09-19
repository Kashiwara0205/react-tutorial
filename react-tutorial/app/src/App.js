import { useState } from 'react';
import './App.css';
import Welcome from './component/welcome/Welcome'
import SearchInput from  './component/search/Input'
import NameTable from './component/name_table/table'

function App() {
  const [searchValue, setSearchValue ] = useState("");
  const [ nameRecords ]  = useState([{id: 1, name: "xxx"}, {id: 2, name: "ooo"}, {id: 3, name: "ppp"}]);

  return (
    <div className="App">
      <Welcome name="React" />

      <div className="SearchInput">
        <SearchInput setSearchValue={ setSearchValue } />
      </div>

      <div className="NameTable">
        <NameTable records={nameRecords} searchValue={searchValue}/>
      </div>

    </div>
  );
}

export default App;
