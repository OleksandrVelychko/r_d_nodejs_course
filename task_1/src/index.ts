import { Cat } from './cat';
import { App } from './app';
import {addProduct, getProdList} from './products';
import * as faker from "faker";

async function main(): Promise<void> {
    // const app = App.getInstance();
    // await app.run();
    
    // const myCat = new Cat('Daniel');
    // myCat.feed();

    console.time('createProductsMap')
    let productsList = getProdList();
    let count = 0;
    while (productsList.size < 1000) {
      addProduct(faker.commerce.productName(), Number(faker.commerce.price()));
      count ++;  
    }
    console.log('Time for creation of products-prices map: ')
    console.timeEnd('createProductsMap')

    console.time('accessElement')
    let i = 0;
    let key = Array.from(productsList.keys())[50];
    console.log('Element with index 50 is ' + key + ' ' + productsList.get(key))    
    console.timeEnd('accessElement')
//use below to print index product name and price for all items
// console.log(productsList.size + ' with count = ' + count);
// let i = 0;
// productsList.forEach((product, value) => {
//   console.log(i + ' ' + value + ' at price: ' + productsList.get(value));
//   i++;
// })
}

main();
