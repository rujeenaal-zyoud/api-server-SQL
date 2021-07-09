DROP TABLE IF EXISTS clothes;

DROP TABLE IF EXISTS food;

CREATE TABLE clothes (
    id SERIAL PRIMARY KEY,
    nameIt varchar(255),
    priceIt INTEGER
);

CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    nameIt varchar(255),
    priceIt INTEGER
)