import { useState } from 'react';

const SearchBtn = (props) => {
  function handleSubmit() {
    props.setParentSearchValue(props.searchValue)
  }

  return (
    <button onClick={ handleSubmit }>
      Search
    </button>
  )
}

const ResetBtn = (props) => {
  function handleSubmit() {
    props.setParentSearchValue("")
    props.setSearchValue("")
  }

  return (
    <button onClick={ handleSubmit }>
      Reset
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
                value={searchValue} 
                name="name" 
                onChange={ handleChange }
              />
            </td>

            <td>
              <SearchBtn 
                searchValue={searchValue}
                setParentSearchValue={ props.setSearchValue }
            />
            </td>

            <td>
              <ResetBtn 
                setSearchValue={ setSearchValue }
                setParentSearchValue={ props.setSearchValue }
            />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Input