import { ProfileCard } from "./ProfileCard";
import { ToDo } from "./ToDo";
import { Calendar } from "./Calendar";
import { FinanceTracker } from "./FinanceTracker";
import { ProgressBar } from "./ProgressBar";
import { Events } from "./Events";
import styles from "./Dashboard.module.css";

export const DashboardLayout = () => {
  const user = {
    name: "Wisdom",
  };

  return (
    <div className="container">
      <ProfileCard user={user} />
      <div className={styles.dashboard}>
        <ToDo />
        <Calendar />
        <FinanceTracker />
      </div>
      <ProgressBar />
      <Events />
    </div>
  );
};
