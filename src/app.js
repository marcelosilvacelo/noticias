import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("rota get");
});
app.get("/selecoes/:id", (req, res) => {
  res.json(buscarPorId(req.params.id));
});
app.get("/selecao", (req, res) => {
  res.status(200);
  res.send(selecoes);
});
app.post("selecoes", (req, res) => {
  res.status(200);
  res.send("Seleção cadastrada com Sucesso");
});
app.delete("/selecoes/:id", (req, res) => {
  const index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`selecoes com id ${req.params.id}excluido com sucesso`);
});
app.put("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;
  res.json(selecoes);
});
function buscarPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

export default app;
