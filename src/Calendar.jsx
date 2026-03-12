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
    <div>
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <div>
        {daysOfWeek.map((day) => (
          <span key={day} style={{ margin: "6px" }}>
            {day}
          </span>
        ))}
      </div>

      <div>
        {allDays.map((day, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              width: "40px",
              textAlign: "center",
              margin: "4px",
            }}
          >
            <div>{day}</div>

            {day === today && (
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "blue",
                  borderRadius: "50%",
                  margin: "4px auto",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
