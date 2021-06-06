# Gatsby V3 Starter Blog for Devs, with MDX and Custom Code Blocks

## Description

This is a GatsbyJS V3 starter forked form the official gatsby-starter-blog, with the addition of MDX support and custom code blocks, including code block title, 'Copy' button and language ribbon.

![Licence: 0BSD](https://img.shields.io/github/license/rossettiquette/gatsby-starter-blog-dev-mdx) ![Gatsby Version 3](https://img.shields.io/badge/Gatsby-V3-blueviolet) [![Netlify Status](https://api.netlify.com/api/v1/badges/35f57f2e-1841-44b3-982c-d92060cee477/deploy-status)](https://app.netlify.com/sites/gatsby-starter-blog-dev-mdx/deploys)

## Demo

You can see a working demo [here](https://gatsby-starter-blog-dev-mdx.netlify.app/).
![Demo Screenshot](https://github.com/rossettiquette/gatsby-starter-blog-dev-mdx/blob/main/src/images/demo.jpg?raw=true)

## Prerequisites

Make sure you have Node.js at version 12 or higher installed, as well as Git and Gatsby Cli. If you don't already have Gatsby Cli installed, do that first.

```shell
npm install -g gatsby-cli
```

## 🚀 Quick start

1. **Create a Gatsby site.**

   Use the Gatsby CLI to create a new site, specifying the blog starter.

   ```shell
   # create a new Gatsby site using the blog starter
   gatsby new my-blog https://github.com/rossettiquette/gatsby-starter-blog-dev-mdx
   ```

2. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-blog/
   gatsby develop
   ```

3. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link:_`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

   Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

.
├── node_modules
├── src
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🦄 Customize

Open up the gatsby-config.js file in the root folder and find the site metadata information. Replace author bio information with your own: change the title of the site, the author name and summary, your site's description and your twitter handle. Change your URL as well if you already have one.

```gatsby-config.js
siteMetadata: {
    title: `Your Site Title`,
    author: {
        name:`Your Name`,
        summary: `who lives and works in New York City building whimsical things.`,
    },
    description: `A starter blog demonstrating what Gatsby and MDX can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
        twitter: `your_twitter_handle`,
    },
},
```

If you want to use Google Analytics to track your site's stats, look for the following lines, uncomment them and add your own tracker:

```gatsby-config.js
// {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
```

Open the src > images folder and replace the profile-pic.jpg file with your own profile picture. Optionally, replace the gatsby-icon.png file with your own site favicon.

Finally, open the content/blog folder and edit your posts. To add a new post, create a new folder inside content/blog and add a new index.mdx file inside.

## 💫 Deploy

[Build, Deploy, and Host On Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[![Deploy to Gatsby Cloud](https://www.gatsbyjs.com/deploynow.svg)](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-blog)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

[Check out other hosting options and Gatsby deployment guides in the official docs.](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/)

## Acknowledgements

This project is bootstrapped using Gatsby's gatsby-starter-blog template, originally by [Kyle Mathews](https://bricolage.io/). [Chris Biscardi](https://www.christopherbiscardi.com/) has written a wealth of information on integrating MDX in Gatsby sites. I found [Jim Raptis'](https://raptis.wtf/blog/gatsby-mdx-copy-code-button-with-confetti/) article on adding a 'Copy Code' button to a Gatsby blog particularly useful. If using Gatsby V2, [Matt Hagner](https://www.matthagner.com/)'s gatsby-starter-blog-mdx is a great resource.
