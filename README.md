Blog (Project name yet to be defined)
============

## About

This project is about creating a blog powered by AngularJS through static files.

## Tech stack

- Twitter boostrap
- AngularJS 1.5

## Static file

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

If you wish to contribute to this project make sure you read the [CONTRIBUTING.md](CONTRIBUTING.md) file
