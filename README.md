# Silex + Gulp starter seed

---

### TODO
- [ ] copy assets files to web
- [ ] Auto-reload files
- [ ] Active menu in nav
- [ ] Complete README
- [ ] PHPUNIT

---

> A starter Kit for PHP developer including [Silex](http://silex.sensiolabs.org), [Twig](http://twig.sensiolabs.org), [Gulp](http://gulpjs.com), [JQuery](https://github.com/jquery/jquery), [Bootstrap Sass](https://github.com/twbs/bootstrap-sass), [Sass](http://sass-lang.com), [TypeScript](https://www.typescriptlang.org)

This seed repo is a starter kit for PHP developer based on Silex and a front-end stack on Gulp.

* Best practice for HTML5, CSS and JavaScript organization
* Code validation (HTML, JS, CSS)
* HTML Templating
* CSS Preprocessing

## Quick start
### Pre-requirements
* PHP version >= 5.5
* composer
* Node version >= 4
* NPM
* Sass `gem install sass`

```bash
# clone the repo
git clone https://github.com/gairal/silex-gulp-typescript-stack.git

# change directory to the repo
cd silex-gulp-typescript-stack

# install the repo with npm
make install

# start the server
gulp
```
go to [http://localhost:3000](http://localhost:3000) in your browser

---

# Table of Contents
* [File structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [License](#license)

# File structure
```
angular2-webpack-starter/
├──assets
│  ├──config/                          * configuration files and Gulp taks
│  │   ├──gulp/                        * Gulp tasks descriptions
│  │   ├──.htmlhintrc                  * htmlhint configuration file
│  │   ├──.jshintrc                    * jshint configuration file
│  │   ├──sass-lint.yml                * sasslint configuration file (Yaml format)
│  │   ├──config.json                  * variables used got Gulp tasks
│  │   ├──karma.conf.js                * Karma configuration file
│  │   └──tsconfig.json                * TypeScript configuration
│  │
│  ├──src/                             * our source files that will be compiled to javascript
│  │   ├──app/                         * JavaScript/TypeScript files
│  │   │
│  │   └──assets/                      * static assets are served here
│  │       ├──img/                     * images
│  │       └──scss/                    * Sass files
│  │           ├──app.scss             * Main Sass files
│  │           └──common/              * Sass common files
│  │               ├──_bootstrap.scss  * Bootstrap Sass module import file
│  │               ├──_mixins.scss     * for you own Sass mixins here
│  │               └──_variables.scss  * for your sass variables
│  │
│  ├──gulpfile.js                      * gulp main configuration file
│  ├──package.json                     * what npm uses to manage it's dependencies
│  └──typings.json                     * Typings list (JQuery and Bootstrap)
│
├──app
│  └──Application.php                  * Silex app configuration file
│
├──src
│  ├──controllers                      * PHP controllers
│  │
│  ├──model                            * PHP model
│  │
│  └──views                            * Twig views
│
├──tests                               * phpunit tests definitions
│
└──web                                 * Public folder
   └──index.php                        * PHP index file
```
# Getting Started
## Dependencies
You need to install the following on you system
* `php` (`brew install php56`)
* `composer`
* `node` and `npm` (`brew install node`)
* Ensure you running Node version >= 4.0.0
* ruby (`brew install ruby`)

Then install tools you'll need to run the app
* sass (`gem install sass`)
* gulp (`npm install gulp -g`)
* typings (`npm install typings -g`)
* typescript (`npm install typescript -g`)
* karma (`npm install karma-cli -g`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `gulp` to start the dev server

## Running the app
After all dependencies are installed, just run `gulp` to start a local server using `browser-sync` which will watch your files and build them.
browser-sync will display the address and port of your server (by default, `http://0.0.0.0:3000`).

### Gulp commands
#### Server
```bash
# build files then launch the server and watch files
gulp
# compiled version
gulp run:compile
```
#### Build files
```bash
# build files in ./build/ (Typescript, Sass, Jade) and validate them
gulp build
# "compile" files in ./compile/
# minify and concatenate every css and js including
# Optimize images compression
# Site ready for production
gulp compile
```
#### Validate files
```bash
# runs the validations htmlhint, jshint, csslint, sasslint, TsLint
gulp validate
```
#### Package site
```bash
# compile files then get the last git tag and create a zip named after it
gulp delivery
```
#### Deploy site
```bash
# compile the site then send it to a given server path over scp
gulp deploy
```
# Configuration
Most of the configuration files are in ./config
* `config.json`: contains the paths to the various kind of files used by Gulp
* `.htmlhintrc` :htmlhint config files
* `.jshintrc`: jshint config file (used only if using ES5 JavaScript)
* `sass-lint.yml`: sasslint config file
* `tsconfig.json`: TypeScript config file

# License
[MIT](/LICENSE.md)
