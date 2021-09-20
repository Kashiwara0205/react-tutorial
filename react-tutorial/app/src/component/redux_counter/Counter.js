import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './reducer'
import CounterBtn from './Count_btn'

const store = createStore(reducer);

function Counter(){
  return(
    <Provider store={store}>
      <CounterBtn></CounterBtn>
    </Provider>
  )
}

export default Counter