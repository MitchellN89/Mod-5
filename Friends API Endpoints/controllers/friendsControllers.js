const friends = require("../models/friends");

const sendAllFriends = (req, res) => {
  res.json(friends);
};

const getFriendsByFilter = (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterFirstLetter = req.query.letter; // variable that holds the first letter the user has specified
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filterFirstLetter) {
    // another filter to grab all friends that have the first letter of their name match the user specified letter
    const letter = filterFirstLetter.toUpperCase(); // firstly, changing whatever the user passed in to uppercase
    matchingFriends = matchingFriends.filter((friend) => {
      const friendFirstLetter = friend.name[0].toUpperCase(); // secondly, getting the first letter of the friend and uppercasing that too
      return letter === friendFirstLetter; // checking to see if it's a match... not case sensitive anymore
    });
  }

  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res
      .status(404)
      .json({ error: "No friends found from your search criteria" });
  }
};

const getInfo = (req, res) => {
  const result = {
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"], //this is a get request and so there is no content-type...
    accept: req.headers.accept,
  };
  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json(result);
};

const getFriendById = (req, res) => {
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found

  const foundFriend = friends.find((friend) => friend.id == friendId); // get the right friend as according to the id

  if (foundFriend) {
    // Modify this response with the matched friend, or a 404 if not found
    res.status(200).json(foundFriend); // send just the one found friend IF a friend was found
  } else {
    res.status(400).json({
      error: `No Friend was found with the ID of ${friendId} `, //otherwise send back error
    });
  }
};

const newFriend = (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  let friendToReplace = friends.find((friend) => friend.id == friendId);

  if (friendToReplace) {
    // on the following two lines, I've made it so that it only updates the propeties specified in the body. if any are not speicifed, it uses the original data.
    // you can also only pass in name and gender. this would ensure data consistancy in the backend.
    friendToReplace.name = updatedFriend.name || friendToReplace.name;
    friendToReplace.gender = updatedFriend.gender || friendToReplace.gender;

    res.status(200).json({
      result: "Updated friend with ID " + friendId,
      data: friendToReplace,
    });
    console.log(friends); //just to see the updated changes...
  } else {
    res
      .status(400)
      .json({ error: `No friend was found with the ID of ${friendId}` }); //added in some basic data validation
  }
  // Modify this response with the updated friend, or a 404 if not found
};

module.exports = {
  sendAllFriends,
  getFriendsByFilter,
  getInfo,
  getFriendById,
  newFriend,
  updateFriend,
};
