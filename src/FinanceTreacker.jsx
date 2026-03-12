export const FinanceTracker = () => {
  const monthlyIncome = 7580;
  const monthlyExpenditure = 1280;
  const monthlySavings = monthlyIncome - monthlyExpenditure;

  return (
    <div>
      <p>Monthly Income: ${monthlyIncome}</p>
      <p>Monthly Expenditure: ${monthlyExpenditure}</p>
      <p>Monthly Savings: ${monthlySavings}</p>
    </div>
  );
};
