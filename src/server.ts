import express from 'express';
const app = express();

// Get -> Buscar informacoes
app.get("/", (req, res) => {
    return res.json({ message: "Hello World (GET)" })
})

// Post -> Alterar informacoes
app.post("/", (req, res) => {
    return res.json({ message: "This is a POST" })
})

app.listen(3000, () => console.log("Server rodando!!"))