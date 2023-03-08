const Donation = require("../models/donationsModel");


// create a donation -------->>>>>>>

const createDonation = async (req, res) => {
    let newDonation = new Donation(req.body);

    newDonation.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Donation saved successfully",
        });
    });
};

// const createDonation = async (req, res) => {
//     const { name, email, phone, amount } = req.body;

//     let emptyFields = [];

//     if (!name) {
//         emptyFields.push("name");
//     }
//     if (!email) {
//         emptyFields.push("email");
//     }
//     if (!phone) {
//         emptyFields.push("phone");
//     }
//     if (!amount) {
//         emptyFields.push("amount");
//     }
//     if (emptyFields.length > 0) {
//         return res
//             .status(400)
//             .json({ error: "Please fill in all fields", emptyFields });
//     }

//     // add to the database
//     try {
//         //   const user_id = req.user._id
//         const donation = await Donation.create({
//             name,
//             email,
//             phone,
//             amount,
//         });
//         res.status(201).json({ donation });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// get all donations -------->>>>>>>

const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createDonation,
    getAllDonations,
};
