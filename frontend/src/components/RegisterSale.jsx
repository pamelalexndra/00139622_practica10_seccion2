import { useState } from "react";

export default function RegisterSale() {
  const [amount, setAmount] = useState("");
  const [idCustomer, setIdCustomer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3010/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(amount),
        id_customer: Number(idCustomer),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Venta registrada exitosamente ✔");
        } else {
          setMessage("Error: " + data.message);
        }
      })
      .catch((err) => setMessage("Error inesperado"));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Registrar Venta</h2>

      {message && <p><strong>{message}</strong></p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>ID Cliente:</label>
          <input
            type="number"
            value={idCustomer}
            onChange={(e) => setIdCustomer(e.target.value)}
            required
          />
        </div>

        <button type="submit">Guardar Venta</button>
      </form>
    </div>
  );
}
