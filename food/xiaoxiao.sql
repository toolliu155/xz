SET NAMES UTF8;
DROP DATABASE IF EXISTS xx;
CREATE DATABASE xx CHARSET=UTF8;
USE xx;

CREATE TABLE xx_user (
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(24),
    upwd VARCHAR(32),
    phone VARCHAR(26)
    
);

/*CREATE TABLE xx_fruit(
    fid PRIMARY KEY AUTO_INCREMENT,#水果编号
    title VARCHAR(64) #标题
    fname VARCHAR(64) #水果名称
)

CREATE table xx_fruit_pic(
    pid PRIMARY KEY AUTO_INCREMENT,
    fruit_id INT,
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHar(128)
    )*/
INSERT INTO xx_user VALUES(NULL,'?','?','?');