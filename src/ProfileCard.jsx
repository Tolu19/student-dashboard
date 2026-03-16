import styles from "./ProfileCard.module.css";

export const ProfileCard = ({ user }) => {
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.user}>
        <h1>Hi {user.name}!</h1>
        <h2 className={styles.productivity}>Your Productivity Overview</h2>
      </div>
      <label className={styles.avatar}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-avatar"
        />
        <input type="file" accept="image/*" />
      </label>
    </div>
  );
};
