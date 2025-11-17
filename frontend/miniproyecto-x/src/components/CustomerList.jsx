import { useEffect, useState } from "react";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3010/customers")
      .then(res => res.json())
      .then(data => {
        setCustomers(data.customers);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <table border="1" cellPadding="8" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Código</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.address}</td>
            <td>{c.phone}</td>
            <td>{c.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
