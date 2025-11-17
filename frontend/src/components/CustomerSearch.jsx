import { useState } from "react";

export default function CustomerSearch() {
  const [code, setCode] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!code.trim()) {
      alert("Ingresa un código");
      return;
    }

    try {
      const res = await fetch(`/api/customers/search?code=${code}`);
      const data = await res.json();

      if (!data.success) {
        alert("No se encontró el cliente");
        return;
      }

      setResults(data.resultsFind);
    } catch (error) {
      console.error("Error al buscar:", error);
    }
  };

  return (
    <div>
      <h2>Buscar Cliente por Código</h2>

      <input
        type="text"
        placeholder="Código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {results.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
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
            {results.map((c) => (
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
      )}
    </div>
  );
}
