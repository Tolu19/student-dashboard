import styles from "./ProfileCard.module.css";

export const ProfileCard = ({ user }) => {
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.user}>
        <h1>Hi {user.name}!</h1>
        <input type="file" accept="image/*" />
      </div>
      <h2>Your Productivity Overview</h2>
    </div>
  );
};
