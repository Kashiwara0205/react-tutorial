import { useState } from 'react';

const SearchBtn = (props) => {
  function handleSubmit() {
    props.setSearchValue(props.searchValue)
    console.log('Pushed Search Btn');
  }
    
  return (
    <button onClick={ handleSubmit }>
      Search
    </button>
  )
}

function Input(props){
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event){
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <p> SearchValue: </p>
      <table>
        <tbody>
          <tr>

            <td>
              <input 
                type="text" 
                name="name" 
                onChange={ handleChange }
              />
            </td>

            <td>
              <SearchBtn 
                searchValue={searchValue}
                setSearchValue={ props.setSearchValue }
            />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Input