import { pool } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");

    res.status(200).json({
      success: true,
      products: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, category, brand, price, stock, description } = req.body;

    const result = await pool.query(
      `INSERT INTO products (name, category, brand, price, stock, description)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, category, brand, price, stock, description]
    );

    res.status(201).json({
      success: true,
      product: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, brand, price, stock, description } = req.body;

    const result = await pool.query(
      `UPDATE products
       SET name = $1,
           category = $2,
           brand = $3,
           price = $4,
           stock = $5,
           description = $6
       WHERE id = $7
       RETURNING *`,
      [name, category, brand, price, stock, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};