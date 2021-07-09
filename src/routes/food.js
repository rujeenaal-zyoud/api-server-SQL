'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express = require('express');
const dataCollection = require('../models/data-collection-class');
const router = express.Router();
//foods here that in model class that we create
//the foodss it's string from table 
const foods = new dataCollection('food');


//create requests
router.get('/', getFoods);
router.get('/:id', getFoods);
router.post('/', createFoods);
router.put('/:id', updateFoods);
router.delete('/:id', deleteFoods);



async function getFoods(req,res,next){
    try {
        

        const resObj = await foods.read (req.params.id);
        res.json(resObj.rows)
    } catch (error) {
    next(error)    
    }
}

async function createFoods(req,res,next){
    try {
        const resObj = await foods.create(req.body);
        res.status(201).json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}

async function updateFoods(req,res,next){
    try {
        const resObj = await foods.update(req.params.id,req.body);
        res.json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}


async function deleteFoods(req,res,next){
        //we give the function parametre as the model we have create
    try {
        const resObj = await foods.delete(req.params.id);
        res.json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}



module.exports=router

