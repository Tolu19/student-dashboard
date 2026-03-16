
import styles from "./Finance.module.css";
export const FinanceTracker = () => {
  const monthlyIncome = 7580;
  const monthlyExpenditure = 1280;
  const monthlySavings = monthlyIncome - monthlyExpenditure;

  return (
    <div className={styles.card}>
      <h2>Finance</h2>
      <p>Monthly Income: ${monthlyIncome}</p>
      <p>Monthly Expenditure: ${monthlyExpenditure}</p>
      <p>Monthly Savings: ${monthlySavings}</p>
    </div>
  );
};
