import { useState } from 'react';
import './App.css';
import Welcome from './component/welcome/Welcome'
import SearchInput from  './component/search/Input'
import NameTable from './component/name_table/table'
import Counter from './component/counter/counter'
import ReduxCounter from './component/redux_counter/Counter'

function App() {
  const [searchValue, setSearchValue ] = useState("");
  const [ nameRecords ]  = useState([{id: 1, name: "xxx"}, {id: 2, name: "ooo"}, {id: 3, name: "ppp"}]);
  const [ count, setCountValue ] = useState(0)

  return (
    <div className="App">
      <Welcome name="React" />

      <div className="SearchInput">
        <SearchInput setSearchValue={ setSearchValue } />
      </div>

      <div className="NameTable">
        <NameTable records={nameRecords} searchValue={searchValue}/>
      </div>

      <div className="Counter">
        <Counter count={count} setParentCountValue={ setCountValue }></Counter>
      </div>

      <div className="ReduxCounter">
        <ReduxCounter></ReduxCounter>
      </div>

    </div>
  );
}

export default App;
