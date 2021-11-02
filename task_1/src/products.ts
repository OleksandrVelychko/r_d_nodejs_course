export {};
//import faker from "faker";


let productsList = new Map();

export function getProdList(){
  return productsList
}

export function addProduct(product: string, price: number)
{    
    productsList.set(product, price);
    //console.log('adding a new product: ' + product + 'with price ' + price);    
}

