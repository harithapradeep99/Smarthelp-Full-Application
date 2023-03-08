const Community = require("../models/communityModel");

// create a community -------->>>>>>>

const createCommunity = async (req, res) => {
    let newCommunity = new Community(req.body);

    newCommunity.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Community craeted successfully",
        });
    });
};

// get all communities -------->>>>>>>

const getAllCommunities = async (req, res) => {
    Community.find()
        .sort({ created: -1 })
        .exec((err, communities) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            return res.status(200).json({
                success: true,
                existingCommunities: communities,
            });
        });
};

// get a community -------->>>>>>>

const getCommunity = async (req, res) => {
    let communityId = req.params.id;

    Community.findById(communityId, (err, community) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            community,
        });
    });
};

module.exports = {
    createCommunity,
    getAllCommunities,
    getCommunity,
};
