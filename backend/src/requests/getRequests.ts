import { Router, Request, Response } from "express";
import { QueryResult } from "pg";
var connection = require('../dataBase/connection.js');
var appRoot = require('../index')
connection.connect();
if(connection){
    console.log('database connection')
}
const router = Router();

router.get('/', (req: Request, response: Response) => {
  response.sendFile(appRoot + '/pages/index.html');
});


router.get('/getProducts', (req: Request, response: Response) => {
  connection.query(`
    SELECT * FROM shawarma."Products" LEFT JOIN shawarma."Ingredients" ON (shawarma."Products"."idProduct" = shawarma."Ingredients"."Products_idProduct");
  `, (err: Error, res: QueryResult) => {
  if (err) throw err;
  if(res) {
    const data = res.rows;
    const newArray = data.map((item) => {
      const filterArray = data.filter(filterItem => filterItem.Products_idProduct === item.idProduct);
      const ProductList = {
        idProduct: item.idProduct,
        title: item.title,
        weight: item.weight,
        price: item.price,
        type: item.type,
        promo: item.promo,
        imagePath: item.imagePath,
        ingredients: (filterArray.length) ? filterArray.map(function(ingred){
          return {
            idIngredient: ingred.idIngredient,
            ingredTitle: ingred.ingredTitle,
            ingredQuantity: ingred.ingredQuantity,
          }
        }) : null
      }
      
      return ProductList;
    });
    //@ts-expect-error
    const unique = newArray.reduce((unique, item) => {
      //@ts-expect-error
      const checkArray = unique.filter(filterItem => filterItem.idProduct === item.idProduct);
      return (checkArray.length) ? unique : [...unique, item];
    }, [])
    response.send(unique);
  }
});

});

router.get('/getFilials', (req: Request, response: Response) => {
  connection.query(`
    SELECT * FROM shawarma."Filials";
  `, (err: Error, res: QueryResult) => {
  if (err) throw err;
  if(res) {response.send(res.rows)}
  })
});


router.get('/getPromo', (req: Request, response: Response) => {
  connection.query(`
    SELECT * FROM shawarma."Products" LEFT JOIN shawarma."Ingredients" ON (shawarma."Products"."idProduct" = shawarma."Ingredients"."Products_idProduct") WHERE shawarma."Products"."promo" = true;
  `, (err: Error, res: QueryResult) => {
  if (err) throw err;
  if(res) {
    const data = res.rows;
    const newArray = data.map((item) => {
      const filterArray = data.filter(filterItem => filterItem.Products_idProduct === item.idProduct);
      const ProductList = {
        idProduct: item.idProduct,
        title: item.title,
        weight: item.weight,
        price: item.price,
        type: item.type,
        promo: item.promo,
        imagePath: item.imagePath,
        ingredients: (filterArray.length) ? filterArray.map(function(ingred){
          return {
            idIngredient: ingred.idIngredient,
            ingredTitle: ingred.ingredTitle,
            ingredQuantity: ingred.ingredQuantity,
          }
        }) : null
      }
      
      return ProductList;
    });
    //@ts-expect-error
    const unique = newArray.reduce((unique, item) => {
      //@ts-expect-error
      const checkArray = unique.filter(filterItem => filterItem.idProduct === item.idProduct);
      return (checkArray.length) ? unique : [...unique, item];
    }, [])
    response.send(unique);
  }
});

});

export { router };