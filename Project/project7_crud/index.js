const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const products = require("./data/product");

const app = express();
const PORT = 3000;

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ================= HOME =================
app.get("/", (req, res) => {
    res.render("home", { products });
});

// ================= NEW FORM =================
app.get("/products/new", (req, res) => {
    res.render("new");
});

// ================= CREATE =================
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

    res.redirect("/");
});

// ================= EDIT FORM =================
app.get("/products/edit/:id", (req, res) => {

    const id = req.params.id;

    const product = products.find((p) => p.id == id);

    res.render("edit", { product });

});

// ================= UPDATE =================
app.put("/products/:id", (req, res) => {

    const id = req.params.id;

    const product = products.find((p) => p.id == id);

    if (product) {

        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;
        product.desc = req.body.desc;

    }

    res.redirect("/");

});

// ================= DELETE =================
app.delete("/products/:id", (req, res) => {

    const id = req.params.id;

    const index = products.findIndex((p) => p.id == id);

    if (index !== -1) {
        products.splice(index, 1);
    }

    res.redirect("/");

});

// ================= SERVER =================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});