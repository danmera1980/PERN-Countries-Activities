const {Router} = require("express");
const {getActivitiesQuery, getAllActivities, deleteCountry_Activity, createActivity } = require('../controllers/activity');

const router = Router();

// router.get('/', getActivitiesQuery);
router.get('/', getAllActivities);
// router.get('/:idActivity', getActivityId);
router.post('/', createActivity);
router.delete('/', deleteCountry_Activity);

module.exports = router;