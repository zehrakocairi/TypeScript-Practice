import { Product } from "./Product";

export class SimpleDataSource {
    private products:Array<Product>;

    constructor (){
        this.products= new Array<Product>(
            new Product (1,"Samsung S5","Phone",200),
            new Product (2,"Samsung S6","Phone",300),
            new Product (3,"Samsung S7","Phone",400),
            new Product (4,"Samsung S8","Phone",500),
        );
    }

    getProducts(): Product[]{
      return this.products
    }
    
}