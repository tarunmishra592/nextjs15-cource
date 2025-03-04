'use client'

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, RootState } from "../store/store";

export default function Counter() {
//   const [count, setCount] = useState(0);

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900">Counter App</h1>
        <p className="text-lg text-gray-700 mt-2">Count: {count}</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Decrease
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
