CREATE DATABASE my_database;
CREATE USER user WITH PASSWORD 'password123'
GRANT ALL PRIVILEGES ON DATABASE my_database TO user;
ALTER DATABASE my_database OWNER TO user;

CREATE TYPE status AS ENUM ('To Do', 'In Progress', 'Done');

CREATE TABLE tasks(
    id BIGSERIAL NOT NULL,
    title VARCHAR(100) NOT NULL,
    due_date DATE NOT NULL,
    "status" status NOT NULL,
    CONSTRAINT pk_tasks PRIMARY KEY (id)
);
