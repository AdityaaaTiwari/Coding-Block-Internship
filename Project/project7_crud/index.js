const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const products = require("./data/product");

const app = express();
const PORT = 3000;

// ================= Middleware =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ================= HOME =================
app.get("/", (req, res) => {
    res.render("home", { products });
});

// ================= SHOW ALL PRODUCTS =================
app.get("/products", (req, res) => {
    res.render("home", { products });
});

// ================= NEW PRODUCT FORM =================
app.get("/products/new", (req, res) => {
    res.render("new");
});

// ================= CREATE PRODUCT =================
app.post("/products", (req, res) => {

    const { name, image, price, desc } = req.body;

    const newProduct = {
        id: uuidv4(),
        name,
        image,
        price,
        desc
    };

    products.push(newProduct);

    res.redirect("/products");

});

// ================= SHOW SINGLE PRODUCT =================
app.get("/products/:id", (req, res) => {

    const { id } = req.params;

    const product = products.find((p) => p.id == id);

    if (!product) {
        return res.send("Product Not Found");
    }

    res.render("show", { product });

});

// ================= EDIT FORM =================
app.get("/products/edit/:id", (req, res) => {

    const { id } = req.params;

    const product = products.find((p) => p.id == id);

    if (!product) {
        return res.send("Product Not Found");
    }

    res.render("edit", { product });

});

// ================= UPDATE PRODUCT =================
app.put("/products/:id", (req, res) => {

    const { id } = req.params;

    const product = products.find((p) => p.id == id);

    if (product) {

        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;
        product.desc = req.body.desc;

    }

    res.redirect("/products");

});

// ================= DELETE PRODUCT =================
app.delete("/products/:id", (req, res) => {

    const { id } = req.params;

    const index = products.findIndex((p) => p.id == id);

    if (index !== -1) {

        products.splice(index, 1);

    }

    res.redirect("/products");

});

// ================= START SERVER =================
app.listen(PORT, () => {
    console.log(`Server Running : http://localhost:${PORT}`);
});