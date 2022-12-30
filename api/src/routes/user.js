const router = require("express").Router()

const userSchema = require("../models/user")


//create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body)
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

//get all users
router.get("/users", (req, res) => {
  userSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

//get id
router.get("/users/:id", (req, res) => {
  const { id } = req.params
  userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

//update user
router.put("/users/:id", (req, res) => {
  const { id } = req.params
  const { name, age, email } = req.body
  userSchema.updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

//delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params
  userSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

//trae los favoritos
router.get("/users/favorites/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//add favorit
router.put("/users/favorites/:id", (req, res) => {
  const { id } = req.params;
  const { favorito } = (req.body);
  userSchema
    .updateOne({ _id: id }, { $push: { favoritos:favorito } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete favorit
router.delete("/users/favorites/:id", (req, res) => {
  const { id } = req.params;
  const { favorito } = (req.body);
  userSchema
    .updateOne({ _id: id },{$pull: {favoritos:favorito}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// borrar usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router