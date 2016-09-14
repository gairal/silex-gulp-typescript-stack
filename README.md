# Silex + Gulp starter seed

---

### TODO
- [ ] Solution to concat assets and update twigs

---

> A starter Kit for PHP developer including [Silex](http://silex.sensiolabs.org), [Twig](http://twig.sensiolabs.org), [Gulp](http://gulpjs.com), [JQuery](https://github.com/jquery/jquery), [Bootstrap Sass](https://github.com/twbs/bootstrap-sass), [Sass](http://sass-lang.com), [TypeScript](https://www.typescriptlang.org)

This seed repo is a starter kit for PHP developer based on Silex and a front-end stack on Gulp.

* Best practice for HTML5, CSS and JavaScript organization
* Code validation (HTML, JS, CSS)
* HTML Templating with Twig
* CSS Preprocessing
* PHPUnit

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

# start the php server
make run-php

# start the assets server
make run-assets
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
│  │   └──tsconfig.json                * TypeScript configuration
│  │
│  └──src/                             * our source files that will be compiled to /web
│      ├──app/                         * JavaScript/TypeScript files
│      ├──img/                         * images
│      └──scss/                        * Sass files
│          ├──app.scss                 * Main Sass files
│          └──common/                  * Sass common files
│              ├──_bootstrap.scss      * Bootstrap Sass module import file
│              ├──_mixins.scss         * for you own Sass mixins here
│              └──_variables.scss      * for your sass variables
│
├──app
│  └──Application.php                  * Silex app configuration file
│
├──src
│  ├──controllers/                     * PHP controllers
│  │
│  ├──model/                           * PHP model
│  │
│  └──views/                           * Twig views
│
├──tests/                              * phpunit tests definitions
│
├──web/                                * Public folder
│  └──index.php                        * PHP index file
│
├──composer.json                       * PHP dependency configuration
├──gulpfile.js                         * gulp main configuration file
├──phpunit.xml                         * PHPUnit testsuite configuration
└──package.json                        * what npm uses to manage it's dependencies
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
* typescript (`npm install typescript -g`)

## Installing''
* `fork` this repo
* `clone` your fork
* `make install` to install all dependencies
* `make run-php` to start the php server
* `make run-assets` to start the assets server

## Running the app
After all dependencies are installed, run `make run-php` and `make run-assets` to start the local php server as well as the assets watcher which will watch your files and build them when they are modified.
The php server will display the address and port of your server (by default, `http://localhost:3000`).

### Gulp commands
#### Server
```bash
# build assets files then watch files
make run-assets
# start the php server
make run-php
```
#### Build files
```bash
# build assets then copy them to the ./web/assets folder
make build-assets
```
#### Test
```bash
# Run PHPUnit
make test
```
# Configuration
## Assets
Most of the configuration files for the assets are in ./assets/config
* `config.json`: contains the paths to the various kind of files used by Gulp
* `.jshintrc`: jshint config file (used only if using ES5 JavaScript)
* `sass-lint.yml`: sasslint config file
* `tsconfig.json`: TypeScript config file

## Silex
* `app/Application.php`: contains the Silex app configuration
* `composer.json`: php dependencies configuration

# License
[MIT](/LICENSE.md)
