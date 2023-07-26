import { useSelector, useDispatch } from 'react-redux';
import { incr } from 'redux/slise';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        placeholder="Neme Surname"
        value={filter.payload ? filter.payload : ''}
        onChange={e => dispatch(incr(e.target.value))}
        required
      />
    </label>
  );
};
