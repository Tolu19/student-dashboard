import { ProfileCard } from "./ProfileCard";
import { ToDo } from "./ToDo";
import { Calendar } from "./Calendar";
import { FinanceTracker } from "./FinanceTreacker";
import { ProgressBar } from "./ProgressBar";
import { Events } from "./Events";

export const DashboardLayout = () => {
  const user = {
    name: "Wisdom"
  };

  return (
    <div className="container">
      <ProfileCard user={user} />
      <ToDo />
      <Calendar />
      <FinanceTracker />
      <ProgressBar />
      <Events />
    </div>
  );
};
