const express = require("express");
const resources = express.Router({mergeParams: true});
const { getAllResources, getOneResource, updateResource, deleteResource } = require("../queries/resources.js");

// Get all resources with the users id of {id}
resources.get("/", async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allResources = await getAllResources(usersId);
        res.status(200).json(allResources);
    } catch (error){
        console.log(error);
    }
})

// Get one resource 
resources.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const getResource = await getOneResource(id);
        if (getResource.id){
            res.status(200).json(getResource);
        } else {
            res.status(500).json({ error: "resource not found!" });
        }
    } catch (error){
        console.log(error);
    }
})

// Update resource
resources.put("/:id", async (req, res)=>{
    const { id } = req.params;
    const { body } = req;
    try {
        const updateOneResource = await updateResource(id, body);
        if (updateOneResource.id){
            res.status(200).json(updateOneResource);
        } else {
            res.status(404).json({ error: "resource not found" });
        }
    } catch (error){
        console.log(error);
    }
})

// Delete resource
resources.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    const deletedResource = await deleteResource(id);
    if (deletedResource.id){
        res.status(200).json(deletedResource);
    } else {
        res.status(404).json({ error: "resource to delete not found" }); 
    }
})


module.exports = resources;