const axios = require("axios");
const {Country, Activity} = require('../db');

const createActivity = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
    try {
        const activity = await Activity.findOrCreate({
           where: {
               name,
               difficulty,
               duration,
               season
           }
        });

        const act = await Activity.findOne({
            where:{
                name
            }
        })

        countries.forEach(c => {
            act.addCountry(c)
        });

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

const deleteCountry_Activity = async (req, res) => {
    try {
        
    } catch (e) {
        
    }
};


module.exports = {
    createActivity,
    getAllActivities,
    deleteCountry_Activity
}