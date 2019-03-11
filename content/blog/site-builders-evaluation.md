---
title: "Site Builders Evaluation"
date: "2019-02-15"
author: "@monte_hayward"
---

I checked out out a number of blog platforms and chose to try a different path. I read many articles and pricing pages. This [indiehackers article](https://www.indiehackers.com/forum/choosing-your-blog-engine-c945c1dc56) was the first I came across that mentioned both Hugo and Gatsby.

I chose not so much a blogging platform as a tech stack and workflow.

- React and Redux to create components
- Gatsby.js to build the static site
- CDN the whole thing
	- e.g S3 + Fastly or S3 + CloudFront

The runners-up were as follows.

- Hugo 
- Ghost
- WordPress / WP Engine

By choosing Gatsby, I make some tradeoffs.

Wordpress "has everything". I could spend a lot of time reading articles about how to turn most everything off. I would likely still end up with a slow-loading site, and pay for expensive hosting to try and speed it up.

### Development Process

Work on a Gatsby site will be more like core development of an app.
Hugo involves learning another template language. I'm more likely to be able to place working code examples on pages in Gatsby.

### Mobile site performance

Performance tuning is baked-into Gatsby.
Getting ridding of server hosting for a CDN gets rid of all sorts of scaling issues and costs.


### Content Management

Hugo is bound to a directory full of markdown and other files.
Gatsby will work with almost any CMS, and work with multiple data sources.
Once the site is built, article writing could become separate, mobile, and/or WYSIYG; free up brain for writing instead of development.
I can learn GraphiQL along the way.


### dependencies

Hugo has no dependencies. 
Gatsby has npm deps, and has gone through a migration path from 1.0 to 2 with breaking changes. So, I will end up managing deps. Gatsby is supposed to abstract away direct webpack configuration. I'm skeptical that the abstraction layer will produce less pain.

### site generation speed

Hugo famously generates a site at a rate of 1ms/page.
Gatsby, according to a webinar, takes ~2mins for a 25-page e-commerce site.

What I lose in site generation speed, I gain in perceived site performance.
That's much more important, and the number of pages is small for now.





