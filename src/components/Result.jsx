// import {calculateInvestmentResults} from "../util/investment.js"
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ value1, value2, value3,value4})
{
    const resultsData=calculateInvestmentResults({initialInvestment: value1,
        annualInvestment: value2,
        expectedReturn: value3/100,
        duration: value4,})
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    console.log(resultsData)
    console.log("value1",value1)
    console.log("value2",value2)
    console.log("value3",value3)
    return(
        <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>interest{value4}</th>
                <th>total Interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
        </table>
    )
}