DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

create table products(
    item_id integer auto_increment,
    product_name varchar(255) not null,
    department_name varchar(255) not null,
    price decimal(5,2) not null,
    stock_quantity integer not null,
    primary key(item_id)
);

SELECT * FROM products;

INSERT  INTO products (product_name, department_name, price, stock_quantity)
VALUES ("light jackets", "clothing", 90.00,	50);
      ("ray-ban womens steel glasses",	"sunglasses",200.00	,50),
    ("anne klein",	"watches",	100.00,	30),
    ("brother printer",	"clothing",	450.00,100),
    ("GG radial tyre","automotive",	148.00,100),
    ("pokemon action figure","clothing",12.00,20),
    ("funko pop disney","kids and toys",8.00,40),
    ("Image Skincare",	"Beaut",64.00,40),
    ("Ameriwood Desk","Furniture",69.00	,10),
    ("Zinus Modern Studio Collection","Furniture",89.00,15);
  




create table departments(
 department_id integer not null auto_increment,
 department_name varchar(20),
 over_head_costs integer,
 primary key (department_id)
 );