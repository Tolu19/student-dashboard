
import styles from "./Calendar.module.css";
export const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const today = currentDate.getDate(); // today's date

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const blanks = Array(firstDay).fill(null);
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const allDays = [...blanks, ...dates];

  return (
    <div className={styles.card}>
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <div className={styles.weekDays}>
        {daysOfWeek.map((day) => (
          <span key={day} >
            {day}
          </span>
        ))}
      </div>

      <div className={styles.datesGrid}>
        {allDays.map((day, index) => (
          <div key={index} className={styles.day}>
            <div>{day}</div>

            {day === today && <div className={styles.todayDot} />}
          </div>
        ))}
      </div>
    </div>
  );
};
