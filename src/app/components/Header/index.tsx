import logo from "@/app/fonts/logo-my.jpg";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      {/* 导航栏、logo等 */}
      <div className={styles["header-container"]}>
        <div className={styles["left"]}>
          <h1>Next Chat</h1>
          {/* <img src={logo.src} alt="NextChat Logo" className="logo" /> */}
          <nav className={styles["navigation"]}>
            <ul>
              <li>
                <a href="/">Document</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/chat">Chat</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>123</div>
      </div>
    </header>
  );
};

export default Header;
