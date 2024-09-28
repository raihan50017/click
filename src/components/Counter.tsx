import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { increment, decrement } from '../redux/features/counter/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-900 text-white py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-green-900 text-white py-2 px-4 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
