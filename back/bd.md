docker ps
...
docker exec -it <id>


queries:

-- cria o banco (só se não existir)
CREATE DATABASE IF NOT EXISTS manager
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- usa ele
USE manager;

-- cria uma tabela de exemplo

CREATE TABLE IF NOT EXISTS equipment (

    id varchar(36) NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    category varchar(32) NOT NULL,
    ns varchar(64) unique,
    acquisition_date varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- pra conferir
SHOW TABLES;
DESCRIBE equipment;