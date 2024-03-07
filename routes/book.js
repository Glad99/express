import express from "express";
import {data } from "../data.js" 
import { isJson } from "../utils/data.js";


//Router object inside express will be extracted
const router = express.Router();

const a =[]

router
  .route("/book")
  .get(function (req, res) {
    res.send(data);
  })
  .post((req, res) => {
    console.log(req.body)
    a.push(req.body);
    res.send(a)
  })
  .put(function (req, res) {
    res.send("Update the book");
  });

export default router;