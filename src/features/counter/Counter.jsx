import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increament,decreament,reset,increamentByAmount} from './counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <p>{count}</p>
      <div>
      <input placeholder="increment amount" value={amount} onChange={(e)=>{
        setAmount(Number(e.target.value) || 0)
      }}/>
      <button onClick={()=>dispatch(increamentByAmount(amount))}>
        add Amount
      </button>
      </div>
      <div>
          <button onClick={()=>dispatch(increament())}>+</button>
          <button onClick={()=>dispatch(decreament())}>-</button>
          <button onClick={()=>{
            setAmount(0)
            dispatch(reset())}}
          >reset</button>
      </div>
    </div>
  )
}

export default Counter
