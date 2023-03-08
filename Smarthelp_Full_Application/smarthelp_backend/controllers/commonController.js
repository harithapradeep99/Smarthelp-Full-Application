const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Donation = require("../models/donationsModel");

const data_count = async (req, res) => {
    try {
        const count_data = [];
        const user_data = await User.find().count();
        const project_data = await Project.find().count();

        count_data.push({
            users: user_data,
            projects: project_data,
        });

        res.status(200).json({
            success: true,
            msg: "Counting data",
            data: count_data,
        });

        // const user_count = await User.countDocuments();
        // const project_count = await Project.countDocuments();

        // res.status(200).json({ user_count, project_count });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }l
};

// Count donations by project id
const donation_count = async (req, res) => {
    Donation.find({ projectID: req.params.id }).count((err, donation) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            donation,
        });
    });
};

module.exports = { data_count, donation_count };
