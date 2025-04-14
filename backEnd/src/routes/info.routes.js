const { Router } = require("express");
const {
  getCategorias,
  getSubCategorias,
} = require("../controllers/info/categorias.controller");

const router = Router();

router.get("/info/categorias", getCategorias);
router.get("/info/categorias/:id", getSubCategorias);

module.exports = router;
