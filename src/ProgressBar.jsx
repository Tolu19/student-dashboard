export const ProgressBar = ({ progress = 98 }) => {
  return (
    <div>
      <h2>Your Weekly Progress</h2>
      <p>Google UI/UX Design Certificate Program</p>

      <div>{progress}%</div>
    </div>
  );
};
