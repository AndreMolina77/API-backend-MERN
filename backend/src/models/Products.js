/* 
Campos de la coleccion:
nombre
descripcion
precio
cantidad 
*/

import { Schema, model } from "mongoose"

const productsSchema = new Schema(

    {
        name: {
            type: String, 
            require: true

        },
        description: {
            type: String
        },
        price: {
            type: Number,
            require: true,
            min: 0 //Se puede también se puede colocar max para máximo precio
        },
        stock: {
            type: Number,
            require: true,
            min: 0
        }
    },
    {
        timestamps: true,
        strict: false
    }
);
export default model("Product", productsSchema) //Lo que está en comillas es como aparece en mongoDB, y productsSchema es para nombrar el esquema, no está restringido a llamarse así nada más