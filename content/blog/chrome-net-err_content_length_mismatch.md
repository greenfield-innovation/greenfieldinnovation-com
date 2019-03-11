---
title: "Chrome Error: content length mistmatch"
date: "2019-02-12"
author: "@monte_hayward"
---

<!--
√  Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible.

  Useful Links:
√  - Documentation: https://www.gatsbyjs.org/docs/
√  - How to File an Issue: https://www.gatsbyjs.org/docs/how-to-file-an-issue/

√  Before opening a new issue, please search existing issues: https://github.com/gatsbyjs/gatsby/issues
-->

## Description

Chrome-based browsers seem not to finish loading commons.js when Throttling Slow 3G.
Gatsby running in dev mode. Not reproducible in Firefox.

`GET http://localhost:8000/commons.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)`

### Steps to reproduce

- Gatsby quick start steps

```
npx gatsby new gatsby-site
cd gatsby-site
npm run develop
```

- new Chrome install. Version 72.0.3626.96 (Official Build) (64-bit)
- open http://localhost:8000
- load, shift-reload are fine
- devtools: Throttling, Slow 3G
- (optional) Application / clear storage
- shift-reload

### Expected result

- development build is not optimized
- "3G" slower loading, but complete

### Actual result

- commons.js does not complete loading, times out at ~44.8s.
- `GET http://localhost:8000/commons.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)`

additional:

- sometimes will work, and complete in 30-44s.

Standard timeout is 5 minutes, afaict: https://cs.chromium.org/chromium/src/net/socket/client_socket_pool.cc?sq=package:chromium&l=18


### Environment

`npx gatsby info --clipboard` 

```
  System:
    OS: macOS 10.14.2
    CPU: (8) x64 Intel(R) Core(TM) i7-4870HQ CPU @ 2.50GHz
    Shell: 3.2.57 - /bin/bash
  Binaries:
    Node: 10.15.1 - /usr/local/bin/node
    npm: 6.7.0 - ~/.node/bin/npm
  Languages:
    Python: 2.7.10 - /usr/bin/python
  Browsers:
    Chrome: 72.0.3626.96
    Firefox: 64.0.2
    Safari: 12.0.2
  npmGlobalPackages:
    gatsby-cli: 2.4.9
```

### TL;DR

Firefox does not show the issue. 
Reload works, except this message: 
`The connection to http://localhost:8000/__webpack_hmr was interrupted while the page was loading. commons.js:48819:13`
Assume this is just interruption of socket connection.

####  Brave and Chrome, more detail

```console
2s    localhost
4.4s  socket.io
44.82 commons.js
...   manifest, a couple icons
```

Error given:

```console
EventSource failed loading: GET "http://localhost:8000/__webpack_hmr".
Navigated to http://localhost:8000/
localhost/:1 GET http://localhost:8000/commons.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)
```

In header, `Content-Length: 2095420`
TTFB 2s, and Network panel showed counting up to 2.0MB.
But the response is empty, at least in Network panel.





