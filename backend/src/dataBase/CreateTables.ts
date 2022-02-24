const connection=require('./connection.ts');
connection.connect()
if(connection){
    console.log('database connection')
}

/* connection.query(`
    CREATE SCHEMA IF NOT EXISTS shawarma;
    CREATE TABLE shawarma."Filials"
  (
      "idFilial" serial NOT NULL,
      "filialTitle" character varying NOT NULL,
      lat numeric NOT NULL,
      lon numeric NOT NULL,
      phone character varying NOT NULL,
      adress character varying NOT NULL,
      email character varying NOT NULL,
      PRIMARY KEY ("idFilial")
  );
  
    ALTER TABLE IF EXISTS shawarma."Filials"
      OWNER to dnkwwjkgcebqou;
      `, (err, res) => {
      if (err) throw err;
      if(res) {
        console.log('Table created')
      }
    });
 */
    /* connection.query(`
        CREATE SCHEMA IF NOT EXISTS shawarma;
        CREATE TABLE shawarma."Products"
      (
          "idProduct" serial NOT NULL,
          title character varying NOT NULL,
          weight numeric NOT NULL,
          price numeric NOT NULL,
          type character varying NOT NULL,
          promo boolean NOT NULL,
          "imagePath" character varying,
          PRIMARY KEY ("idProduct")
      );
      
      ALTER TABLE IF EXISTS shawarma."Products"
        OWNER to dnkwwjkgcebqou;
      `, (err, res) => {
        if (err) throw err;
        if(res) {
          console.log('Table created')
        }
      }); */

     /*  connection.query(`
        CREATE SCHEMA IF NOT EXISTS shawarma;
      
        CREATE TABLE shawarma."Orders"
      (
          "idOrder" serial NOT NULL,
          name character varying NOT NULL,
          phone character varying NOT NULL,
          PRIMARY KEY ("idOrder")
      );
      
        ALTER TABLE IF EXISTS shawarma."Orders"
          OWNER to dnkwwjkgcebqou;
      
      `, (err, res) => {
        if (err) throw err;
        if(res) {
          console.log('Table created')
        }
      }); */

  /*     connection.query(`
      CREATE TABLE shawarma."Ingredients"
      (
          "idIngredient" serial NOT NULL,
          "ingredTitle" character varying NOT NULL,
          "ingredQuantity" integer NOT NULL,
          "Products_idProduct" serial NOT NULL,
          PRIMARY KEY ("idIngredient"),
          CONSTRAINT "Products_idProduct" FOREIGN KEY ("Products_idProduct")
              REFERENCES shawarma."Products" ("idProduct") MATCH SIMPLE
              ON UPDATE NO ACTION
              ON DELETE NO ACTION
              NOT VALID
      );
      
      ALTER TABLE IF EXISTS shawarma."Ingredients"
          OWNER to dnkwwjkgcebqou;
      
      `, (err, res) => {
        if (err) throw err;
        if(res) {
          console.log('Table created')
        }
      }); */


 /*      connection.query(`
      CREATE TABLE shawarma."ProductsOrderList"
(
    "productQuantity" integer NOT NULL,
    "Products_idProduct" serial NOT NULL,
    "Orders_idOrder" serial NOT NULL,
    CONSTRAINT "Products_idProduct" FOREIGN KEY ("Products_idProduct")
        REFERENCES shawarma."Products" ("idProduct") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "Orders_idOrder" FOREIGN KEY ("Orders_idOrder")
        REFERENCES shawarma."Orders" ("idOrder") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS shawarma."ProductsOrderList"
    OWNER to dnkwwjkgcebqou;
    `, (err, res) => {
        if (err) throw err;
        if(res) {
          console.log('Table created')
        }
      }); */

      connection.query(`
      CREATE TABLE shawarma."AddIngredient"
(
    "newIngredQuantity" integer NOT NULL,
    "Ingredients_idIngredient" serial NOT NULL,
    "Orders_idOrder" serial NOT NULL,
    CONSTRAINT "Ingredients_idIngredient" FOREIGN KEY ("Ingredients_idIngredient")
        REFERENCES shawarma."Ingredients" ("idIngredient") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "Orders_idOrder" FOREIGN KEY ("Orders_idOrder")
        REFERENCES shawarma."Orders" ("idOrder") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS shawarma."AddIngredient"
    OWNER to dnkwwjkgcebqou;
    `, (err, res) => {
        if (err) throw err;
        if(res) {
          console.log('Table created')
        }
      }); 