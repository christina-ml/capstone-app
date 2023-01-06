const db = require("../db/dbConfig.js");

// get all nfts
const getAllNfts = async() => {
    try {
        const allNfts = await db.any("SELECT * FROM nfts");
        return allNfts;
    } catch (error) {
        return error;
    }
}

// get one nft by id of {nid}
const getOneNft = async(nid) => {
    try{
        const oneNft = await db.one("SELECT * FROM nfts WHERE nid=$1", nid);
        return oneNft;
    } catch(err){
        return err;
    };
};

module.exports = {
    getAllNfts,
    getOneNft
}