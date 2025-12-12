import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <h3>This is header</h3>
      <button className={styles.btn}>Header</button>
    </div>
  );
};

export default Header;
