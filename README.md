# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Plan
##### The Docs Have
 - Definition/Info
 - Code Snippets:
  ```bash
  npm init docusaurus@latest my-website classic
  ```
 - Note
 - Caution
 - Takeaway
 - Link external **[docusaurus.new](https://docusaurus.new)**
 - Referincing docs
```
I am referencing a [document](doc2.md).
Reference to another [document in a subfolder](subfolder/doc3.md).
[Relative document](../otherFolder/doc4.md) referencing works as well.
```
 - Empasys: **bold**
 - Small example `text`
 - main title: ##
 - second title: ###
 - three layer list:
```
- that you want your users to remember
  - and you may nest them
    - multiple times
```
- for sidebar
```
---
sidebar_position: 1
id: greet
title: Hello0
tags:
  - Demo
  - Getting started
---
```