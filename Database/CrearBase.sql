SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema PI_GRUPO10
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PI_GRUPO10
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PI_GRUPO10` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `PI_GRUPO10` ;

-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`caracteristica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`caracteristica` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `icono` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `valor` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`imagen` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `url_img` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 67
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`categoria` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `imagen_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKpvp3hn1y53n8f9biyk8ad3r9d` (`imagen_id` ASC) VISIBLE,
  CONSTRAINT `FKpvp3hn1y53n8f9biyk8ad3r9d`
    FOREIGN KEY (`imagen_id`)
    REFERENCES `PI_GRUPO10`.`imagen` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`ciudad` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `localidad` VARCHAR(255) NULL DEFAULT NULL,
  `provincia` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`politica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`politica` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(700) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`producto` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `categoria_id` BIGINT NULL DEFAULT NULL,
  `ciudad_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKodqr7965ok9rwquj1utiamt0m` (`categoria_id` ASC) VISIBLE,
  INDEX `FKl5u48oo6p0ip3a6y4uv1mts4l` (`ciudad_id` ASC) VISIBLE,
  CONSTRAINT `FKl5u48oo6p0ip3a6y4uv1mts4l`
    FOREIGN KEY (`ciudad_id`)
    REFERENCES `PI_GRUPO10`.`ciudad` (`id`),
  CONSTRAINT `FKodqr7965ok9rwquj1utiamt0m`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `PI_GRUPO10`.`categoria` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 78
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`producto_has_caracteristica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`producto_has_caracteristica` (
  `producto_id` BIGINT NOT NULL,
  `caracteristica_id` BIGINT NOT NULL,
  INDEX `FKtbfyiwmciv2qk2epgue99246j` (`caracteristica_id` ASC) VISIBLE,
  INDEX `FKf58phxn3ef8oextq761n0r5n3` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `FKf58phxn3ef8oextq761n0r5n3`
    FOREIGN KEY (`producto_id`)
    REFERENCES `PI_GRUPO10`.`producto` (`id`),
  CONSTRAINT `FKtbfyiwmciv2qk2epgue99246j`
    FOREIGN KEY (`caracteristica_id`)
    REFERENCES `PI_GRUPO10`.`caracteristica` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`producto_has_imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`producto_has_imagen` (
  `producto_id` BIGINT NOT NULL,
  `imagen_id` BIGINT NOT NULL,
  INDEX `FKkucb3u3ehh71a7jsanrwmk2tx` (`imagen_id` ASC) VISIBLE,
  INDEX `FKhfrl1g8t0clo6puuqfe9vvt0u` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `FKhfrl1g8t0clo6puuqfe9vvt0u`
    FOREIGN KEY (`producto_id`)
    REFERENCES `PI_GRUPO10`.`producto` (`id`),
  CONSTRAINT `FKkucb3u3ehh71a7jsanrwmk2tx`
    FOREIGN KEY (`imagen_id`)
    REFERENCES `PI_GRUPO10`.`imagen` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`producto_has_politica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`producto_has_politica` (
  `producto_id` BIGINT NOT NULL,
  `politica_id` BIGINT NOT NULL,
  INDEX `FKsfdvvcatdc5ivf7u4yh4j3vi7` (`politica_id` ASC) VISIBLE,
  INDEX `FKcmwt4yh3h16b35axgyc8jkot7` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `FKcmwt4yh3h16b35axgyc8jkot7`
    FOREIGN KEY (`producto_id`)
    REFERENCES `PI_GRUPO10`.`producto` (`id`),
  CONSTRAINT `FKsfdvvcatdc5ivf7u4yh4j3vi7`
    FOREIGN KEY (`politica_id`)
    REFERENCES `PI_GRUPO10`.`politica` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`rol` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`usuario` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `contrasenia` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `rol_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKshkwj12wg6vkm6iuwhvcfpct8` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `FKshkwj12wg6vkm6iuwhvcfpct8`
    FOREIGN KEY (`rol_id`)
    REFERENCES `PI_GRUPO10`.`rol` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`puntuacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`puntuacion` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `puntuacion` INT NULL DEFAULT NULL,
  `producto_id` BIGINT NOT NULL,
  `usuario_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKa4veyvqemi2lxibidd7e5h8qk` (`producto_id` ASC) VISIBLE,
  INDEX `FK5n8pewrfbucrxps483lc57l5` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `FK5n8pewrfbucrxps483lc57l5`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `PI_GRUPO10`.`usuario` (`id`),
  CONSTRAINT `FKa4veyvqemi2lxibidd7e5h8qk`
    FOREIGN KEY (`producto_id`)
    REFERENCES `PI_GRUPO10`.`producto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `PI_GRUPO10`.`reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PI_GRUPO10`.`reserva` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha_fin` DATE NULL DEFAULT NULL,
  `fecha_inicio` DATE NULL DEFAULT NULL,
  `hora_inicio` VARCHAR(255) NULL DEFAULT NULL,
  `producto_id` BIGINT NOT NULL,
  `usuario_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKnh6tntdsfc76618c8sxxrxn7t` (`producto_id` ASC) VISIBLE,
  INDEX `FKiad9w96t12u3ms2ul93l97mel` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `FKiad9w96t12u3ms2ul93l97mel`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `PI_GRUPO10`.`usuario` (`id`),
  CONSTRAINT `FKnh6tntdsfc76618c8sxxrxn7t`
    FOREIGN KEY (`producto_id`)
    REFERENCES `PI_GRUPO10`.`producto` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 64
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
