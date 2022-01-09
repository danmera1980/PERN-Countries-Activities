const axios = require("axios");
const {Activity} = require('../db');
const { all } = require("../routes/activity");

const createActivity = async (req, res) => {
    const {name, difficulty, duration, season} = req.body;
    try {
        const activity = await Activity.findOrCreate({
           where: {
               name,
               difficulty,
               duration,
               season
           } 
        })

        res.status(200).send(activity)
    } catch (e) {
        console.log(e)
    }
};

const getAllActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll();

        res.status(200).send(allActivities)
    } catch (e) {
        console.log(e)
    }
};

module.exports = {
    createActivity,
    getAllActivities
}