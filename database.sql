-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE shoppinglist (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shoppinglist" ("name", "quantity") 
VALUES ('Milk', '1'), ('Apples', '2.5');
