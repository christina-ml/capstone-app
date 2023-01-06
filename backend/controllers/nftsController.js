const express = require("express");
const nfts = express.Router();
const {
    getAllNfts,
    getOneNft
} = require("../queries/nfts.js");

// get all nfts
nfts.get("/", async (req, res)=> {
    try {
        const allNfts = await getAllNfts();
        if (allNfts[0]){
            res.status(200).json(allNfts);
        } else {
            res.status(500).json({ error: "Error: there are no nfts" });
        }
    } catch (err) {
        console.log(err);
    }
})

// get one nft by id of {nid}
nfts.get("/:nid", async(req, res) => {
    const { nid } = req.params;
    try{
        const oneNft = await getOneNft(nid);
        if(oneNft.nid){
            res.status(200).json(oneNft);
        } else {
            res.status(404).json("Error: Nft ID not found");
        }
    } catch(err){
        return err;
    }
});

module.exports = nfts;