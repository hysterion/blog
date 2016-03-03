Blog (Project name yet to be defined)
============

## About

This project is about created a blog powered by AngularJS with static files.

### Static file

The static files are using the `yaml` syntax to define the different information and markdown for the article. Because AngularJS don't understand `markdown` files, we will parse the files to generate a matching `json` files :

```markdown
---
author: Lorem Ipsum
published: 01-01-1970
title: My awesome title
tags: a tag, another tag, yet another tag, a last one
---

Lorem ipsum **dolor** sit amet, *consectetur* adipiscing elit. Etiam eu bibendum nulla. Suspendisse tempus sollicitudin tellus, quis consequat nisl interdum sed. Duis vitae lacus condimentum, efficitur ex pulvinar, blandit dui. Nullam varius convallis ex, malesuada mattis lacus lobortis ornare. Etiam lorem sapien, posuere commodo arcu id, dictum laoreet sem. Sed vitae est varius, varius erat a, accumsan eros. Vestibulum dictum sem vel ligula ultricies, non congue orci pretium. Sed tristique, risus quis bibendum blandit, est tellus congue augue, eu tempus libero ex bibendum dolor.
```

will become

```json
[{
	"author": "Lorem Ipsum",
	"published": "01-01-1970",
	"title": "My awesome title",
	"tags": [ "a tag", "another tag", "yet another tag", "a last one" ],
	"content": "Lorem ipsum **dolor** sit amet, *consectetur* adipiscing elit. Etiam eu bibendum nulla. Suspendisse tempus sollicitudin tellus, quis consequat nisl interdum sed. Duis vitae lacus condimentum, efficitur ex pulvinar, blandit dui. Nullam varius convallis ex, malesuada mattis lacus lobortis ornare. Etiam lorem sapien, posuere commodo arcu id, dictum laoreet sem. Sed vitae est varius, varius erat a, accumsan eros. Vestibulum dictum sem vel ligula ultricies, non congue orci pretium. Sed tristique, risus quis bibendum blandit, est tellus congue augue, eu tempus libero ex bibendum dolor."
}]
```

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.
