import { useEffect, useState } from "react";

export default function SalesReport() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetchSalesReport();
  }, []);

  const fetchSalesReport = async () => {
    try {
      const res = await fetch("/api/sales/report");
      const data = await res.json();

      if (data.success) {
        setReport(data.resultsFind);
      }
    } catch (error) {
      console.error("Error fetching sales report:", error);
    }
  };

  return (
    <div>
      <h2>Reporte de Ventas por Cliente</h2>

      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Total Ventas</th>
          </tr>
        </thead>
        <tbody>
          {report.map((r, index) => (
            <tr key={index}>
              <td>{r.name}</td>
              <td>${Number(r.total_sales).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
