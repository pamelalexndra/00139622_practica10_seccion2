import { useEffect, useState } from "react";

export default function SalesList() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3010/sales")
      .then(res => res.json())
      .then(data => {
        setSales(data.sales);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando ventas...</p>;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Listado de Ventas</h2>

      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>ID Venta</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Cliente</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>${sale.amount}</td>
              <td>{new Date(sale.created_at).toLocaleDateString()}</td>
              <td>{sale.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
