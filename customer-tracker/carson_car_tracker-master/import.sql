CREATE TABLE customers(
    id integer PRIMARY KEY AUTOINCREMENT,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50),
    gender varchar(50),
    phone_number varchar(15),
    date_created timestamp DEFAULT current_timestamp
);

CREATE TABLE cars(
    id integer PRIMARY KEY AUTOINCREMENT,
    model varchar(50),
    make varchar(50),
    cost_price varchar(50),
    sale_markup varchar(50),
    date_created timestamp DEFAULT current_timestamp
);

CREATE TABLE transactions(
    id integer PRIMARY KEY AUTOINCREMENT,
    customers_id integer,
    cars_id integer,
    date_created timestamp DEFAULT current_timestamp
);

ALTER TABLE customers 
    ADD notes text;