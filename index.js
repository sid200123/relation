const express = require("express");
const cors = require("cors");
const { sequelize, User, Post } = require("./models");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", async (req, resp) => {
  try {
    console.log(req.body);
    const users = await User.create(req.body);
    console.log(users);
    return resp.json(users);
  } catch (err) {
    return resp.json(err);
  }
});

app.get("/users", async (req, resp) => {
  try {
    const userData = await User.findAll({
      include: "posts",
    });
    resp.json(userData);
  } catch (err) {
    resp.json("Something wwent wrong...");
  }
});

app.get("/users/:uuid", async (req, resp) => {
  const uuid = req.params.uuid;
  try {
    const userData = await User.findOne({
      include: "posts",
      where: {
        uuid: uuid,
      },
    });
    resp.json(userData);
  } catch (err) {
    resp.json("Something wwent wrong...");
  }
});

app.put("/users/:uuid", async (req, resp) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const userData = await User.findOne({
      include: "posts",
      where: {
        uuid: uuid,
      },
    });
    userData.name = name;
    userData.email = email;
    userData.role = role;

    await userData.save();
    resp.json(userData);
  } catch (err) {
    resp.json("Something wwent wrong...");
  }
});

app.delete("/users/:uuid", async (req, resp) => {
  const uuid = req.params.uuid;
  try {
    const userData = await User.findOne({
      where: {
        uuid: uuid,
      },
    });
    await userData.destroy();
    resp.json({ msg: "User Deleted" });
  } catch (err) {
    resp.json("Something wwent wrong...");
  }
});

app.post("/posts", async (req, resp) => {
  const { userUuid, body } = req.body;
  try {
    const users = await User.findOne({
      where: {
        uuid: userUuid,
      },
    });
    const post = await Post.create({ body, userId: users.id });
    return resp.json(post);
  } catch (err) {
    return resp.json(err);
  }
});

app.get("/posts", async (req, resp) => {
  try {
    const post = await Post.findAll({
      include: [User],
    });
    return resp.json(post);
  } catch (err) {
    return resp.json(err);
  }
});

app.get("/posts/:uuid", async (req, resp) => {
  const uuid = req.params.uuid;
  try {
    const post = await Post.findOne({
      include: [User],
      where: {
        uuid,
      },
    });
    return resp.json(post);
  } catch (err) {
    return resp.json(err);
  }
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}!`);
  await sequelize.authenticate();
  console.log("Database Connected!");
});
