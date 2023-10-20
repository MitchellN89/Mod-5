const express = require("express");
const router = express.Router();

const controller = require("../controllers/friendsControllers");

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

// default endpoint, gets all friends
router.get("/", (req, res) => {
  controller.sendAllFriends(req, res);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
router.get("/filter", (req, res) => {
  controller.getFriendsByFilter(req, res);
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  controller.getInfo(req, res);
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  controller.getFriendById(req, res);
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
//
router.post("/", (req, res) => {
  controller.newFriend(req, res);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  controller.updateFriend(req, res);
});

module.exports = router;
