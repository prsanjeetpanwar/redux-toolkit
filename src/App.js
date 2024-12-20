import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './features/counter/counter.slice';




function App() {

  const count =useSelector((state)=> state.counter.value)
  const dispatch=useDispatch()

 function handleIncrementClick(){
  dispatch(increment())

 }
 function handleDecrementClick(){
  dispatch(decrement())
 }

  return (
    <div className="flex  flex-col h-screen w-screen gap-40 bg-gradient-to-r 
          from-gray-950 to-gray-700  p-40 items-center justify-center ">

      <div className='flex px-80 py-5 bg-white rounded-lg gap-6'>
        <button
        onClick={handleIncrementClick}
        className='bg-gray-700 px-4 py-2  hover:scale-105 rounded-xl text-2xl text-white'>+</button>
        <p className=' font-semibold  text-3xl '>{count}</p>
        <button
        onClick={handleDecrementClick}
        className='bg-gray-700 px-4 py-2  hover:cursor-pointer
           rounded-xl text-2xl text-white hover:scale-105 '>-
        </button>
      </div>

    </div>

  );
}

export default App;
