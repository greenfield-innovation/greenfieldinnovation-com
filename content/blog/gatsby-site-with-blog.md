---
title: "Gatsby.js: Building a Site with a Blog"
date: "2019-02-22"
author: "@monte_hayward"
---

Most of the starters and examples assume that you are either building a business site or a blog.
The ones that have both "site" pages (About, Contact, etc) and blog pages use a structure like this:

```text
src/pages/ - all direct site pages go here
    index.js
    404.js
    about.js    web path /about/
    contact.js
content/blog
    topic-1.md  web path /blog/topic-1
    topic-2.md
```

They make use of Gatsby's automatic page generation from `src/pages`. 
File `gatsby-node.js` is used to generate any pages outside this default config.

## Markdown for Site Pages

What if you want site pages to be authored as markdown, not JSX?
Also, you may want some separation between code development and content authoring. 
You might think to add a directory such as `/content/site`. 
Slugs are auto-generated, so the url would contain the directory name: `example.com/site/about/`.
One way to get the desired path is to put site pages directly in `content`.
Then you get the path without a subdirectory, and without having content in `src/pages`.

```text
src/pages/
    index.js
    404.js
content/
    about.md    web path /about/
    contact.md
    blog/
        topic-1.md  web path /blog/topic-1
        topic-2.md
```