import {useState} from "react"
import Result from "./Result"
export default function UserInput()
{
  const [value1,value01]=useState(10000)
  function initialInvestment(e)
  {
    value01(e.target.value)
    // console.log(e.target.value)
  }
  const [value2,value02]=useState(1200)
  function AnnualInvestment(e)
  {
    value02(e.target.value)
    // console.log(e.target.value)/
  }
  const [value3,value03]=useState(6)
  function expectedReturn(e)
  {
    value03(e.target.value)
    // console.log(e.target.value)
  }
  const [value4,value04]=useState(10)
  function Duration(e)
  {
    value04(e.target.value)
    // console.log(e.target.value)
  }
  return(
    <section>
      <div>
        <p>
          <label>Initial Investment</label>
          <input
          type="number"
          required
          value={value1}
          onChange={initialInvestment}/>
          <label>Annual Investment</label>
          <input
          type="number"
          required
          value={value2}
          onChange={AnnualInvestment}/>
          </p>
        </div>
        <div>
        <p>
          <label>Expected Return</label>
          <input
          type="number"
          required
          value={value3}
          onChange={expectedReturn}/>
          <label>Duration</label>
          <input
          type="number"
          required
          value={value4}
          onChange={Duration}/>
          </p>
          </div>
          <Result value1={parseInt(value1)} value2={parseInt(value2)} value3={parseInt(value3)} value4={parseInt(value4)} /> 
      </section>
  )
}

