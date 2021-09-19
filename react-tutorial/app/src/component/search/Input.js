import { useState } from 'react';
import PropTypes from 'prop-types'

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

SearchBtn.propTypes = {
  setParentSearchValue: PropTypes.func,
  searchValue: PropTypes.string
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

ResetBtn.propTypes = {
  setParentSearchValue: PropTypes.func,
  setSearchValue: PropTypes.func
}

function Input(props){
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event){
    setSearchValue(event.target.value)
  }

  return (
    <div>
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

Input.propTypes = {
  setSearchValue: PropTypes.func
}

export default Input