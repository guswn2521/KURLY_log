"use strict";

import Sequelize from "sequelize";
const env = process.env.NODE_ENV || "development";
import config from "../config/config.js";
const db = {};

let sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: "postgres",
    logging: false,
});

import User from "./schemas/users";
import Reveiw from "./schemas/reviews";
import Product from "./schemas/products";
import Like from "./schemas/like";
import Follow from "./schemas/follow";

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = User(sequelize, Sequelize);
db.review = Reveiw(sequelize, Sequelize);
db.product = Product(sequelize, Sequelize);
db.like = Like(sequelize, Sequelize);
db.follow = Follow(sequelize, Sequelize);

export default db;
