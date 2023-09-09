import styles from "./navigation.module.scss";

function Navigation(props) {
  const { links } = { ...props };

  if (!links) {
    return null;
  }
  const lists = links.map((link) => (
    <li key={`nav-item-${link.text}`}>
      <a href={link.href}>{link.text}</a>
    </li>
  ));

  return (
    <header>
      <div className={styles.nav}>
        <ul>{lists}</ul>
      </div>
    </header>
  );
}

export default Navigation;
