const { Router } = require("express");
const {
  getUsuario,
  postUsuario,
  getUserToken,
  getOneUsuario,
} = require("../controllers/usuarios.controller");
const {
  getArticulos,
  getOneArticulo,
  putArticulos,
  deleteArticulos,
  getArticulosHome,
  pruebas,
} = require("../controllers/articulos.controller");
const { autenticarToken } = require("../middlewares/autenticarToken");
const { autenticarValores } = require("../middlewares/autenticarValores");
const { doCompraUser } = require("../controllers/compras.controller");
const { getOnePedido } = require("../controllers/pedidos.controller");
const { getAllVentas } = require("../controllers/admin/dashboard");
const {
  cantStockDisponible,
  cantStockNoDisponible,
  cantVentas,
  cantUsuarios,
  masVendidos,
  menosVendidos,
  ultimasVentas,
} = require("../controllers/admin/recuentosDashboard");
const {
  allProductosInventario,
  oneProducto,
} = require("../controllers/admin/inventario");
const { allPedidos, onePedido } = require("../controllers/admin/pedidos");
const {
  postArticulos,
  getUltimoId,
  getUltimaReferencia,
} = require("../controllers/admin/articulos.controller");
const { subirImagen } = require("../controllers/admin/subirImagen");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = Router();


router.get("/prueba", pruebas);
//TODO: Sobre los articulos
router.get("/articulos", getArticulos);
//router.get("/articulos/:id", getOneArticulo);
router.get("/home/articulos", getArticulosHome);

router.delete("/articulos/:id", deleteArticulos);

router.put("/articulos/:id", putArticulos);

//TODO:Sobre los usuarios
//*login
router.post("/login", getUsuario);
//*verificacion del token
router.get("/usuario", autenticarToken, getUserToken);
//*registro del usuario
router.post("/registro", autenticarValores, postUsuario);

router.get("/obtenerusuario/:id", getOneUsuario);

//*Obtener pedido
router.get("/pedido/:idPedido/:idUsuario", getOnePedido);

//TODO: COMPRAS Y PEDIDOS USUARIO
router.post("/compra", doCompraUser);

//TODO: ADMINISTRADORES:
router.get("/dashboard/:dataFecha", getAllVentas);

//*Recuentos en dashboard
router.get("/stockdisponible", cantStockDisponible);

router.get("/stocknodisponible", cantStockNoDisponible);

router.get("/cantventas", cantVentas);

router.get("/cantusuarios", cantUsuarios);

//*Recuentos de más, menos y recientes ventas

router.get("/masvendidos", masVendidos);

router.get("/menosvendidos", menosVendidos);

router.get("/ultimosvendidos", ultimasVentas);

//*Inventario
router.get("/allproducto", allProductosInventario);

router.get("/onearticulo/:idArticulo", oneProducto);

//*Pedidos
router.get("/pedidosadmin", allPedidos);

router.get("/pedidosadmin/one/:idVenta/:idArticulo", onePedido);

//*Subir Productos
router.post(
  "/subirimagen",
  upload.array("fotos", 5),
  subirImagen,
  postArticulos
);

router.get("/id", getUltimoId);
router.get("/referencia/:id", getUltimaReferencia);

module.exports = router;
