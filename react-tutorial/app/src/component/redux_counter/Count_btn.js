import { useDispatch, useSelector } from 'react-redux';

function CountBtn(props){
  const dispatch = useDispatch();
  const count = useSelector(state => state)

  const onCountUp = () => {
    dispatch({ type: "COUNT_UP"});
  };
  const onCountDown = () => {
    dispatch({ type: "COUNT_DOWN" });
  };

  return (
    <div>
      <div>count:{count}</div>

      <button onClick={onCountUp}>up!</button>
      <button onClick={onCountDown}>down!</button>
    </div>
  );
}

export default CountBtn