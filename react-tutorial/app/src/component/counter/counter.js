import { useState } from 'react';
import PropTypes from 'prop-types'

function Counter (props){
  const [countValue, setCountValue] = useState(props.count);

  const handleCountup = () =>{
    setCountValue(countValue + 1)
    props.setParentCountValue(countValue)
  }

  return (
    <div>
      <div>
        { countValue }
      </div>

      <div>
        <button onClick={ handleCountup }>count up</button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number,
  setParentCountValue: PropTypes.func
}

export default Counter