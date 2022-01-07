create database labexam;
use labexam;

CREATE TABLE MESSAGE(id int auto_increment, msg varchar(50),
constraint primary key(id));

DROP TABLE MESSAGE;
select *from MESSAGE;

delete from message where id = "13";