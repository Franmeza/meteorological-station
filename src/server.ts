import express from "express";
import morgan from "morgan";
import cors from "cors";

export const server = express(); //initialize server

server.use(express.json()); //read json format
server.use(morgan("dev"));
server.use(cors());
