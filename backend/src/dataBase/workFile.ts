import { QueryResult } from "pg";
import {Router, Request, Response} from 'express';
import { isTemplateMiddle } from "typescript";

const router = Router();

interface Product {
  idProduct: number, 
  title: string,
  weight: string,
  price: string,
  type: string,
  promo: boolean,
  imagePath: string,
  /* ingredients: IngredientsForProduct[] | null */
}
interface IngredientsForProduct {
  idIngredient: number,
  ingredTitle: string,
  ingredQuantity: number,
  ingredPrice: string
}

var connection = require('./connection.js');
connection.connect()
if(connection){
    console.log('database connection')
}

//Unite Products and Ingredients
/* function getData(){
  connection.query(`
  SELECT * FROM shawarma."Products"
  `, (err: Error, res: QueryResult) => {
    if (err) throw err;
    res.rows.forEach(item => {
      connection.query(`
      SELECT * FROM shawarma."Ingredients" WHERE "Products_idProduct" = ${item.idProduct}
      `, (err: Error, res: QueryResult) => {
        if (err) throw err;
        if(res.rows.length === 0) {
          const newArray = {...item, ingredients:null};
          console.log(newArray);
        } else {
          const newArray = {...item, ingredients:res.rows};
          console.log(newArray);
        }
      });
    })
  });
}; */

async function getProd(){
  return connection.query(`
  SELECT * FROM shawarma."Products"
  `, (err: Error, res: QueryResult) => {
    if (err) throw err;
    return res.rows;
    /* res.rows.forEach(item => {
      getIngred(item);
    }) */
  });
};
async function getIngred(item: Product){
  return connection.query(`
    SELECT * FROM shawarma."Ingredients" WHERE "Products_idProduct" = ${item.idProduct}
    `, (err: Error, res: QueryResult) => {
      if (err) throw err;
      if(res.rows.length === 0) {
        return 'NULL'
        /* const newItem = {...item, ingredients:null};
        console.log(newItem); */
      } else {
        return 'OBJ'
        /* const newItem = {...item, ingredients:res.rows};
        console.log(newItem); */
      }
    });
};


router.get('/data', async (req:Request, response:Response) => {
  
  connection.query(`
    SELECT * FROM shawarma."Products" LEFT JOIN shawarma."Ingredients" ON (shawarma."Products"."idProduct" = shawarma."Ingredients"."Products_idProduct");
  `, (err: Error, res: QueryResult) => {
  if (err) throw err;
  if(res) {
    const data = res.rows;
    const newArray = data.map((item, index) => {
      const filterArray = data.filter(filterItem => filterItem.Products_idProduct === item.idProduct);
      const ProductList = {
        idProduct: item.idProduct,
        title: item.title,
        weight: item.weight,
        price: item.price,
        type: item.type,
        promo: item.promo,
        imagePath: item.imagePath,
        ingrediants: (filterArray.length) ? filterArray.map(function(ingred){
          return {
            idIngredient: ingred.idIngredient,
            ingredTitle: ingred.ingredTitle,
            ingredQuantity: ingred.ingredQuantity,
          }
        }) : null
      }
      
      /* let variable = (ProductList.ingrediants.length > 0) ? ProductList.ingrediants.length : 0
      index = index + variable; */
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



/* router.get('/data', (req:Request, response:Response) => {
  function getProd(){
    connection
      .query(`SELECT * FROM shawarma."Products"`)
      .then((res: QueryResult) => getIngred(res.rows))
      .catch((e: Error) => console.error(e.stack));
  }
  function getIngred(array: Product[]){
    array.map(item => {
      connection
        .query(`SELECT * FROM shawarma."Products" WHERE "Products_idProduct" = ${item.idProduct}`)
        .then((res: QueryResult) => response.send(res))
        .catch((e: Error) => console.error(e.stack));
    })
    
  }
  response.header("Content-Type",'application/json');
  getProd()
}); */



/* router.get('/data', (req:Request, response:Response) => {
  response.header("Content-Type",'application/json');
  const productQuery = `SELECT * FROM shawarma."Products"`;
  connection.query(productQuery, (err: Error, result: QueryResult) => {
    const watching = (elem: IngredientsForProduct[] | null) => elem;
    const needData = result.rows;
    const WantIt = needData.map(item => {
      return connection.query(`
      SELECT * FROM shawarma."Ingredients" WHERE "Products_idProduct" = ${item.idProduct}
      `, (err: Error, res: QueryResult) => {
        if (err) throw err;
        return res.rows;
      });
    })
    response.send(WantIt);
  });
}); */


/* const data = connection.query(`
    SELECT * FROM shawarma."Products" RIGHT JOIN shawarma."Ingredients" ON (shawarma."Products"."idProduct" = shawarma."Ingredients"."Products_idProduct");
  `, (err: Error, res: QueryResult) => {
  if (err) throw err;
  if(res) {
    console.log(res.rows)
  }
}); */

export { router };