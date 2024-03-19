import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService=new ProductService();

let result;

result= _productService.getProducts();
//result= _productService.getById(3);

let p=new Product();

p.name="Iphone 15";
p.price=6000;
p.category="Phone"

_productService.saveProduct(p);



console.log(result);