# Contribution Guidline

## Directory Structure and File naming
```
.
├── CONTRIBUTING.md
├── LICENSE
├── Readme.md
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   └── SomeComponent
│   │       ├── index.js
│   │       └── style.scss
│   ├── index.js
│   └── public
│       ├── assets
│       │   └── fonts
│       │       └── SomeFont.ttf
│       └── style.scss
├── stories
│   └── SomeComponent.stories.js
└── webpack.config.js

```
note: file and directory name should not exceed three words

## Installation
1. Clone this repo
2. cd into the repo
3. do npm install

## Storybook Development
1. run storybook server by running ```npm run storybook```
2. if you wanna add a new component please make a new story in ```stories``` directory and registrer it in ```.storybook/config```
3. start hacking

