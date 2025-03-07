// Aqui en el controladon, irán todos los métodos
//Los métodos del (C R U D)

const productsController = {}; //Esto es un array, no se meten valores, se meten métodos.
import productsModel from "../models/Products.js" //productsModel es el acceso a la tabla

// SELECT (utilizando el array de arriba)

productsController.getProducts /*get products es el nombre de la funcion, puedo asignarle cualquier nombre */= async (req /*Aunque no se ocupe req en esta funcion, es bueno 
    dejarlo debido a que es una buena costumbre */, res /*req de request y res de response */) => {
    const products = await productsModel.find(); //find es como en la consola de mongoDB
    res.json(products)
}; //Asyncrona (=>) significa que espera datos, es como una rutina, sigue un flujo de acciones.

//  INSERT

productsController.createProducts = async (req, res)  => {
    const {name, description, price, stock} = req.body; //Estos campos de name, description..., son los campos que se van a mandar

    const newProduct = new productsModel({name,description,price,stock})/*Accedemos a la tabla, recuerda que esto va pegado, a pesar de que haya una nota de por medio */

    await newProduct.save();
    res.json({message: "Producto guardado"}); //Esto es para poder mandar un mensaje con response
};

//DELETE 

productsController.deleteProducts = async (req, res) => {
    const deleteProducts = await productsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Producto eliminado"})
}

// UPDATE 
productsController.updateProducts = async (req, res) => {

    const {name, description, price, stock} = req.body;
    const updateProduct = await productsModel.findByIdAndUpdate(req.params.id,
        {name, description, price, stock}, {new: true}
    );

    res.json({message: "producto actualizado"})

}

// SELECT 1 PRODUCT BY ID
productsController.getProduct = async (req, res) => {
    const product = await productsModel.findById(req.params.id)
    res.json(product);
};

export default productsController;