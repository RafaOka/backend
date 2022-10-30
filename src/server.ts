import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.get('/test', (request, response) => {
    return response.json({message: "Teste"});
});

app.listen(3333, () => {
    console.log("Servidor iniciado!!!");
});