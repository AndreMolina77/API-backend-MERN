import express from "express";

const router = express.Router();
import productsController from "../controllers/productsController.js";

router.route("/") //Cuando alguien entra a esta pleca va a tener los métodos en la ruta
.get(productsController.getProducts)
.post(productsController.createProducts)
/*.put(productsController.updateProducts)
.delete(productsController.deleteProducts) //Estp irá después de la coma en la ruta de app */ /*Estos fueron descartados porque estos buscan por id, pero se podrían utilizar 
para poder buscar datos generales, estos fueron movidos abajo porque, de nuevo, lo buscan por id */

//Al buscar por id

router.route("/:id") // la "/" significa que es /api/productos, los ":" significa que viene un parametro
.get(productsController.getProduct)
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)

export default router;