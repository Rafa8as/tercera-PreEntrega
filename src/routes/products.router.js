import { Router } from "express";
import { 
        editProduct,
        eraseProduct,
        insertProduct,
        product,
        products,
       
 } from "../controllers/products.controller.js";
 import roleAuth from "../middlewares/auth.middleware.js";
 const router = Router ();

 router.get ('/', products);
 router.get ('/:id',product);
 router.post ('/',roleAuth('admin'), insertProduct);
 router.put ('/:pid', roleAuth('admin'), editProduct);
 router.delete ('/:pid', roleAuth ('admin'), eraseProduct);

 console.log (products)
 
 
export default router;