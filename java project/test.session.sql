create database bd_curriculo;

use bd_curriculo;

CREATE TABLE tb_curriculo(
idt_nome INT AUTO_INCREMENT PRIMARY KEY,
obj_curriculo text(200) not null,
cursos_complementares text(300) not null
);

SELECT * FROM tb_curriculo;