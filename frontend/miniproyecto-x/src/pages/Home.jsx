import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sistema de Clientes y Ventas</h1>

      <div style={styles.grid}>
        <Link to="/customers" style={styles.card}>Lista de Clientes</Link>

        <Link to="/customers/search" style={styles.card}>Buscar Cliente por Código</Link>

        <Link to="/sales/new" style={styles.card}>Registrar Venta</Link>

        <Link to="/sales" style={styles.card}>Lista de Ventas</Link>

        <Link to="/sales/report" style={styles.card}>Reporte de Ventas</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    padding: "30px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#f4f4f4",
    textDecoration: "none",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};
