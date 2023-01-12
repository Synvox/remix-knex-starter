import Knex from "knex";
import knexfile from "../knexfile";

const knex = Knex(knexfile[process.env.NODE_ENV || "development"]);

export default knex;
