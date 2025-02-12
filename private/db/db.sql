DROP DATABASE IF EXISTS projectrestauponte;
CREATE DATABASE projectrestauponte;

USE projectrestauponte;

-- -------- CREATE TABLES --------
DROP TABLE IF EXISTS boards;
CREATE TABLE boards
(
    id_board INT NOT NULL AUTO_INCREMENT,
    state_board tinyint not null DEFAULT 0, -- 0 = EMPTY , 1 = KEPT
    PRIMARY KEY (id_board)
);

insert into boards (state_board) values
(default),(default),(default),(default),(default);

DROP TABLE IF EXISTS qrcode;
CREATE TABLE qrcode
(
    id_code INT AUTO_INCREMENT,
    boardAssigned INT not null,
    FOREIGN KEY (boardAssigned) REFERENCES boards(id_board),
    PRIMARY KEY (id_code) 
);


-- -------- CREATE USERS TABLE --------

DROP TABLE IF EXISTS typeUsers;
CREATE TABLE typeUsers
(
    id_typeUser INT unsigned auto_increment,
    name_typeUser VARCHAR(10) NOT NULL DEFAULT 'CUSTOMER',
    PRIMARY KEY (id_typeUser)
);

insert into typeUsers (name_typeUser) values
('CUSTOMER'), ('ADMIN');

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    document_user INT(10) unsigned,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email_address VARCHAR(320) NOT NULL UNIQUE,
    phonenumber CHAR(15) NOT NULL UNIQUE,
    born_year DATE NOT NULL,
    password_user VARCHAR(225) NOT NULL UNIQUE,
    created_at timestamp not null default(now()),
    board_idboard int,
    typeUsers_id_typeUser int unsigned default 1,
    foreign key (typeUsers_id_typeUser) references typeUsers(id_typeUser),
	foreign key (board_idboard) references boards(id_board),
    PRIMARY KEY (document_user)
);

-- -------- CREATE NEWS TABLE -------- 

DROP TABLE IF EXISTS news;
CREATE TABLE news
(
    id_new INT AUTO_INCREMENT,
    title_new VARCHAR(150) NOT NULL,
    description_new VARCHAR(500) NOT NULL,
    created_at timestamp not null default(now()),

    PRIMARY KEY (id_new)
);

insert into news (title_new, description_new) values
('Lanzamiento Satelital', 'Un nuevo satélite fue lanzado al espacio para mejorar las telecomunicaciones.'),
('Concierto de Rock', 'Una famosa banda internacional dará un concierto en la ciudad este fin de semana.'),
('Descubrimiento Científico', 'Científicos han descubierto una nueva partícula que podría cambiar la física moderna.'),
('Avances en Medicina', 'Se desarrolló una nueva vacuna para combatir enfermedades respiratorias.');

DROP TABLE IF EXISTS authorNews;
CREATE TABLE authorNews
(
	news_id_new INT,
    users_document_user INT unsigned,
    foreign key (news_id_new) references news(id_new),
    foreign key (users_document_user) references users(document_user),
    primary key (news_id_new, users_document_user)
);

-- -------- CREATE FOOT TABLE --------

DROP TABLE IF EXISTS foods;
CREATE TABLE foods
(
    id_food INT AUTO_INCREMENT,
    url_image varchar(250),
    ingredients VARCHAR(120) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    value_food INT NOT NULL,
    name_food VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_food)
);

INSERT INTO foods (url_image, ingredients, stock, value_food, name_food) VALUES
(default ,'Tomate, queso, orégano, masa', 15, 8000, 'Pizza Margarita'),
(default, 'Pollo, lechuga, tomate, aderezo César', 10, 12000, 'Ensalada César'),
(default, 'Pan, carne de res, queso, lechuga, tomate, salsa especial', 20, 15000, 'Hamburguesa Clásica'),
(default, 'Arroz, pollo, cebolla, zanahoria, salsa de soya', 25, 10000, 'Arroz Chaufa');


DROP TABLE IF EXISTS typeFoods;
CREATE TABLE typeFoods
(
    id_typeFood INT AUTO_INCREMENT,
    name_typeFood VARCHAR(10) not null,
    FOREIGN KEY (id_typeFood) REFERENCES foods(id_food),
    PRIMARY KEY (id_typeFood)
);

INSERT INTO typeFoods (id_typeFood, name_typeFood) VALUES
(1, 'Rápida'),
(2, 'Corriente'),
(3, 'Rápida'),
(4, 'Especial');

-- ORDER TABLE --
DROP TABLE IF EXISTS orders;
CREATE TABLE orders
(
	id_order int auto_increment,
    quantity_foot int not null default 0,
    user_document_order int unsigned not null, 
    food_order int not null,
    board_order int not null,
    foreign key (user_document_order) references users(document_user),
    foreign key (food_order) references foods(id_food),
    foreign key (board_order) references boards(id_board),
    primary key (id_order, user_document_order, food_order)
);


-- -------- CREATE BILL TABLE --------

DROP TABLE IF EXISTS bills;
CREATE TABLE bills
(
    id_bill INT AUTO_INCREMENT,
    iva_bill FLOAT NOT NULL DEFAULT 0.19,
    nitCompany VARCHAR(11) NOT NULL,
    subtotal FLOAT NOT NULL DEFAULT 0,
    order_idUser int unsigned not null,
    order_idFood int not null,
    bill_idOrder int not null,
    foreign key (order_idUser) references orders(user_document_order),
    foreign key (order_idFood) references orders(food_order),
    foreign key (bill_idOrder) references orders(id_order),
    PRIMARY KEY (id_bill)
);