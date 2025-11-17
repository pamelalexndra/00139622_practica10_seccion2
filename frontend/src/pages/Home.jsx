import { Link } from "react-router-dom";

export default function Home() {
  const menuItems = [
    { to: "/customers", label: "Clientes", icon: "○" },
    { to: "/customers/search", label: "Buscar Cliente", icon: "◇" },
    { to: "/sales/new", label: "Nueva Venta", icon: "△" },
    { to: "/sales", label: "Ventas", icon: "□" },
    { to: "/sales/report", label: "Reportes", icon: "◎" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header minimalista */}
        <header style={styles.header}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>Sistema de Gestión</h1>
            <div style={styles.underline}></div>
          </div>
        </header>

        {/* Menu minimalista */}
        <nav style={styles.menu}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              style={styles.menuItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f8f9fa";
                e.currentTarget.style.paddingLeft = "35px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.paddingLeft = "25px";
              }}
            >
              <span style={styles.icon}>{item.icon}</span>
              <span style={styles.label}>{item.label}</span>
              <span style={styles.chevron}>›</span>
            </Link>
          ))}
        </nav>

        {/* Footer minimalista */}
        <footer style={styles.footer}>
          <div style={styles.footerLine}></div>
          <p style={styles.footerText}>Selecciona una opción del menú</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  content: {
    width: "100%",
    maxWidth: "600px",
    padding: "40px 20px"
  },
  header: {
    marginBottom: "80px",
    textAlign: "center"
  },
  titleContainer: {
    display: "inline-block"
  },
  title: {
    fontSize: "28px",
    fontWeight: "400",
    color: "#1a1a1a",
    margin: "0 0 10px 0",
    letterSpacing: "-0.5px"
  },
  underline: {
    height: "1px",
    backgroundColor: "#1a1a1a",
    width: "60%",
    margin: "0 auto"
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "20px 25px",
    textDecoration: "none",
    color: "#1a1a1a",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    position: "relative"
  },
  icon: {
    fontSize: "20px",
    marginRight: "20px",
    color: "#666",
    fontWeight: "300"
  },
  label: {
    fontSize: "16px",
    fontWeight: "400",
    flex: "1",
    letterSpacing: "-0.2px"
  },
  chevron: {
    fontSize: "24px",
    color: "#ccc",
    fontWeight: "300"
  },
  footer: {
    marginTop: "80px",
    textAlign: "center"
  },
  footerLine: {
    height: "1px",
    backgroundColor: "#e0e0e0",
    width: "50%",
    margin: "0 auto 20px"
  },
  footerText: {
    fontSize: "13px",
    color: "#999",
    fontWeight: "300",
    letterSpacing: "0.3px"
  }
};