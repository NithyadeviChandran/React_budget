import { useState } from 'react'
import './App.css'
import Income from './components/Income'
import Outcome from './components/Outcome'
import Balance from './components/Balance'


function App() {
  const [income, setIncome] = useState(0)
  const [balance, setBalance] = useState(0)
  const [outcome, setOutcome] = useState(0)
  const [desc, Setdesc]     =useState("")
  const [array, setArray] = useState([])
  
  function incomeUpdate(e){
    e.preventDefault();
    setIncome(e.target.income.value)
    Setdesc(e.target.desc.value)
    setArray(i=> [...i,`+ ${e.target.income.value} ${e.target.desc.value}`])
  }


  function outcomeUpdate(e){
    e.preventDefault();
    setOutcome(e.target.outcome.value)
    Setdesc(e.target.exdesc.value)
    setArray(i=> [...i,`- ${e.target.outcome.value} ${e.target.exdesc.value}`])
  }
  function balanceUpdate(e){
    e.preventDefault();
    setBalance(balance+(Number(income)- Number(outcome)))
  }

  return (
    <>
  <Balance bal={balance}/>
  <button type='submit' onClick={balanceUpdate}>Balance</button>
  <form className="form2" onSubmit={incomeUpdate} >
  <p>Income</p>
  {/* <Income s={income} d={desc}/> */}
  <label htmlFor="amount"></label>
  <input type='number' name="income" id="amount" placeholder='enter the amount'/>
  <label htmlFor="desc">Description</label>
  <input type="text" name="desc" id="desc" placeholder='enter the description'/>
  <button type='submit'>Income</button>
  </form>
  {/* <ul>
{array.map(i=> <li>{i}</li>)}
</ul>  */}
<hr />
  <form className="form1" onSubmit={outcomeUpdate} >
  <p>Outcome</p>
  <input type='number' name="outcome" placeholder='enter the amount'/>
  <label htmlFor="exdesc">Expense_Desc</label>
  <input type="text" name="exdesc" id="exdesc" placeholder='enter the description'/>
  <button type='submit'>Outcome</button>
  </form>
  <ul>
  {array.map(i=> <li>{i}</li>)}
  </ul>
    </>
  )
}

export default App
