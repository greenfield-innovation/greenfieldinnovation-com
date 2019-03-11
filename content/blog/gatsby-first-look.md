---
title: "Gatsby.js: First Look"
date: "2019-02-17"
author: "@monte_hayward"
---

## Trying out Gatsby

Zero vulnerabilities found...

```shell
npm install -g gatsby-cli
cd /path/to
mkdir PLAYGROUND
cd PLAYGROUND
npx gatsby new gatsby-example

info Creating new site from git: https://github.com/gatsbyjs/gatsby-starter-default.git
Cloning into 'gatsby-example'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 1187 (delta 2), reused 10 (delta 2), pack-reused 1175
Receiving objects: 100% (1187/1187), 2.89 MiB | 11.24 MiB/s, done.
Resolving deltas: 100% (680/680), done.
success Created starter directory layout
info Installing packages...

> fsevents@1.2.7 install /path/to/PLAYGROUND/gatsby-example/node_modules/chokidar/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download 
[fsevents] Success: "/path/to/PLAYGROUND/gatsby-example/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.4 install /path/to/PLAYGROUND/gatsby-example/node_modules/fsevents
> node install

[fsevents] Success: "/path/to/PLAYGROUND/gatsby-example/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> sharp@0.21.3 install /path/to/PLAYGROUND/gatsby-example/node_modules/sharp
> (node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)

info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.7.0/libvips-8.7.0-darwin-x64.tar.gz

> cwebp-bin@5.0.0 postinstall /path/to/PLAYGROUND/gatsby-example/node_modules/cwebp-bin
> node lib/install.js

  ✔ cwebp pre-build test passed successfully

> mozjpeg@6.0.1 postinstall /path/to/PLAYGROUND/gatsby-example/node_modules/mozjpeg
> node lib/install.js

  ✔ mozjpeg pre-build test passed successfully

> pngquant-bin@5.0.1 postinstall /path/to/PLAYGROUND/gatsby-example/node_modules/pngquant-bin
> node lib/install.js

  ✔ pngquant pre-build test passed successfully
added 1888 packages from 1000 contributors and audited 24490 packages in 88.411s
found 0 vulnerabilities


cd gatsby-example/
npm run develop
```	

Browsed localhost:8000. Fast-loading basic site with 1 link.
The dev build "commons.js" is about 2MB.

- Added React-devtools
- Added Redux-devtools
- Devtools Throttling / Slow 3G
- Devtools Application / Clear all.
- Shift-reload

Blank page. See: [Chrome-specific issue](chrome-net-err_content_length_mismatch.md)



