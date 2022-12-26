const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");

const app = express();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname , "../templates/index.html"))
  res.render("home");
});

router.get("/blog", (req, res) => {
  // res.sendFile(path.join(__dirname, "../views/blogHome.html"))
  res.render("bloghome", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return (e.slug == req.params.slug);
  });
  console.log(myBlog);
  //    res.sendFile(path.join(__dirname, "../views/blogPage.html"))
  res.render("blogPage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
  });
});

module.exports = router;
