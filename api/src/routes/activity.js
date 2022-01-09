const {Router} = require("express");
const {getActivitiesQuery, getAllActivities, getActivityId, createActivity } = require('../controllers/activity');

const router = Router();

// router.get('/', getActivitiesQuery);
router.get('/', getAllActivities);
// router.get('/:idActivity', getActivityId);
router.post('/', createActivity); 

module.exports = router;