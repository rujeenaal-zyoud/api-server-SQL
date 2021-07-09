'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express = require('express');
const dataCollection = require('../models/data-collection-class');
const router = express.Router();
//Clothes here that in model class that we create
//the clothes it's string from table 
const clothe = new dataCollection('clothes');


//create requests
router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.put('/:id', updatClothes);
router.delete('/:id', deleteClothes);



async function getClothes(req,res,next){
    try {
        

        const resObj = await clothe.read (req.params.id);
        res.json(resObj.rows)
    } catch (error) {
    next(error)    
    }
}

async function createClothes(req,res,next){
    try {
        const resObj = await clothe.create(req.body);
        res.status(201).json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}

async function updatClothes(req,res,next){
    try {
        const resObj = await clothe.update(req.params.id,req.body);
        res.json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}


async function deleteClothes(req,res,next){
        //we give the function parametre as the model we have create
    try {
        const resObj = await clothe.delete(req.params.id);
        res.json(resObj.rows[0])
    } catch (error) {
        next(error)
        
    }
}



module.exports=router

