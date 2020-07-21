# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Blog Authentication Exercise

Your task is to build a blog app using MongoDB, Mongoose, Express, and React.

Anyone can read blog posts.
However, a user must be signed in to create, edit, or delete a blog post.

Keep this as simple as possible. You can always add features later.

**Before you write any code, sketch out all the screens you plan to build in react.**

Here is an example schema:

```js
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)
```

```js
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)
```

Deploy!
