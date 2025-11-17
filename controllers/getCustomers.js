import { db } from "../data/connection.js";

export const getCustomers = async (requestAnimationFrame, res) => {
  db.query("SELECT * FROM customers ORDER BY name ASC", (error, results) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    const customers = results.rows;
    return res.status(200).json({
      success: true,
      total: customers.length,
      customers,
    });
  });
};

export const searchCustomerByCode = async (requestAnimationFrame, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Query param 'code' is required",
    });
  }

  db.query(
    "SELECT * FROM customers WHERE code = $1",
    [code],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      const resultsFind = results.rows;
      const resultsLenght = resultsFind.length ?? 0;

      return res.status(200).json({
        success: true,
        message: `customers found: ${resultsLength}`,
        resultsFind,
      });
    }
  );
};