import UserInput from "../components/UserInput";

import { formatter, calculateInvestmentResults } from "../util/investment.js";
export default function Results({ input }) {
  // Calculate investment results based on user input
  const resultsData = calculateInvestmentResults(input);

  // Calculate the initial investment for reference
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);

  return (
    <table id="result">
      <thead id="result">
        <tr>
          <th>Year</th>
          <th> InvestmentValue</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="result">
        {resultsData.map((items) => {
          // Calculate total interest earned up to this year
          const totalInterest =
            items.valueEndOfYear -
            items.annualInvestment * items.year -
            initialInvestment;
            // Calculate total amount invested up to this year
          const totalAmountInvested = items.valueEndOfYear - totalInterest;
          return (
            <tr key={items.year}>
              <td>{items.year}</td>
              <td> {formatter.format(items.valueEndOfYear)} </td>
              <td> {formatter.format(items.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)} </td>

              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
