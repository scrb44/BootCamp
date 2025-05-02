-- Creación de las tablas

CREATE TABLE IF NOT EXISTS socio (
    num_membresia int AUTO_INCREMENT,
    nombre varchar(10) NOT NULL,
    apellido_1 varchar(10) NOT NULL,
    apellido_2 varchar(10),
    fecha_nacimiento date NOT NULL,
    telefono char(9) NOT NULL,
    direccion varchar(30) NOT NULL,
    fecha_inscripcion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_socio PRIMARY KEY (num_membresia)
);

CREATE TABLE IF NOT EXISTS entrenador (
    id_entrenador int AUTO_INCREMENT,
    nombre varchar(10) NOT NULL,
    apellido_1 varchar(10) NOT NULL,
    apellido_2 varchar(10),
    experiencia decimal(2,1) NOT NULL,
    horario MEDIUMTEXT NOT NULL,
    CONSTRAINT PK_entrenador PRIMARY KEY (id_entrenador)
);

CREATE TABLE IF NOT EXISTS evento (
    id_evento int AUTO_INCREMENT,
    nombre varchar(10) NOT NULL,
    descripcion MEDIUMTEXT,
    fecha date NOT NULL,
    hora time NOT NULL,
    lugar varchar(30) NOT NULL,
    CONSTRAINT PK_evento PRIMARY KEY (id_evento)
);

CREATE TABLE IF NOT EXISTS disciplina (
    id_disciplina int AUTO_INCREMENT,
    nombre varchar(10) NOT NULL,
    CONSTRAINT PK_disciplina PRIMARY KEY (id_disciplina)
);

CREATE TABLE IF NOT EXISTS historial_pago (
    id_pago int AUTO_INCREMENT,
    fecha date NOT NULL,
    monto_pago decimal(5,2) NOT NULL,
    estado enum("pagado", "pendiente", "vencido") NOT NULL DEFAULT "pendiente",
    CONSTRAINT PK_historial_pago PRIMARY KEY (id_pago)
);

CREATE TABLE IF NOT EXISTS coordinar (
    id_evento int,
    id_entrenador int
);

CREATE TABLE IF NOT EXISTS ganar (
    id_evento int,
    num_membresia int
);

CREATE TABLE IF NOT EXISTS registrar (
    id_evento int,
    num_membresia int
);

CREATE TABLE IF NOT EXISTS entrenar (
    id_disciplina int,
    id_entrenador int
);

CREATE TABLE IF NOT EXISTS especializar (
    id_disciplina int,
    id_entrenador int
);

CREATE TABLE IF NOT EXISTS participar (
    num_membresia int,
    id_disciplina int
);

-- Añadir claves primarias en tablas secundarias

ALTER TABLE coordinar
    ADD CONSTRAINT PK_coordinar
    PRIMARY KEY (id_evento, id_entrenador);

ALTER TABLE ganar
    ADD CONSTRAINT PK_ganar
    PRIMARY KEY (id_evento, num_membresia);

ALTER TABLE registrar
    ADD CONSTRAINT PK_registrar
    PRIMARY KEY (id_evento, num_membresia);

ALTER TABLE entrenar
    ADD CONSTRAINT PK_entrenar
    PRIMARY KEY (id_disciplina, id_entrenador);

ALTER TABLE especializar
    ADD CONSTRAINT PK_especializar
    PRIMARY KEY (id_disciplina, id_entrenador);

ALTER TABLE participar
    ADD CONSTRAINT PK_participar
    PRIMARY KEY (num_membresia, id_disciplina);

-- Añadir claves foraneas

ALTER TABLE coordinar 
    ADD 
        CONSTRAINT FK_socio_coordinar
        FOREIGN KEY (id_evento)
        REFERENCES evento(id_evento)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_entrenador_coordinar
        FOREIGN KEY (id_entrenador)
        REFERENCES entrenador(id_entrenador)
        ON DELETE cascade ON UPDATE cascade;

ALTER TABLE ganar 
    ADD 
        CONSTRAINT FK_evento_ganar
        FOREIGN KEY (id_evento)
        REFERENCES evento(id_evento)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_socio_ganar
        FOREIGN KEY (num_membresia)
        REFERENCES socio(num_membresia)
        ON DELETE cascade ON UPDATE cascade;

ALTER TABLE registrar
    ADD 
        CONSTRAINT FK_evento_registrar
        FOREIGN KEY (id_evento)
        REFERENCES evento(id_evento)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_socio_registrar
        FOREIGN KEY (num_membresia)
        REFERENCES socio(num_membresia)
        ON DELETE cascade ON UPDATE cascade;

ALTER TABLE entrenar
    ADD 
        CONSTRAINT FK_entrenador_entrenar
        FOREIGN KEY (id_entrenador)
        REFERENCES entrenador(id_entrenador)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_disciplina_entrenar
        FOREIGN KEY (id_disciplina)
        REFERENCES disciplina(id_disciplina)
        ON DELETE cascade ON UPDATE cascade;

ALTER TABLE especializar
    ADD 
        CONSTRAINT FK_entrenador_especializar
        FOREIGN KEY (id_entrenador)
        REFERENCES entrenador(id_entrenador)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_disciplina_especializar
        FOREIGN KEY (id_disciplina)
        REFERENCES disciplina(id_disciplina)
        ON DELETE cascade ON UPDATE cascade;

ALTER TABLE participar
    ADD 
        CONSTRAINT FK_socio_participar
        FOREIGN KEY (num_membresia)
        REFERENCES socio(num_membresia)
        ON DELETE cascade ON UPDATE cascade,
    ADD
        CONSTRAINT FK_disciplina_participar
        FOREIGN KEY (id_disciplina)
        REFERENCES disciplina(id_disciplina)
        ON DELETE cascade ON UPDATE cascade;