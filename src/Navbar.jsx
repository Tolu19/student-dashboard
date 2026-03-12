import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className="container">
      <h2 className={styles.logo}>Next Step</h2>
      <ul className={styles.navlinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Course</a>
        </li>
          <li><a href="#" className={styles.active}>Your Profile</a></li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <span className={styles.question}>?</span>
    </nav>
  );
};
