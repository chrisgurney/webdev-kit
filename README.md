# Webdev Kit

Very basic starting point for web development.

Does not include web tooling for deployments (minification, etc.)

# Getting Started

## Setup Mac

Install XCode Developer Tools

	$ xcode-select --install

Install node/npm from https://nodejs.org/

Install Gulp CLI

	$ sudo npm install --global gulp-cli

## Install

    $ cd /path/to/project
    $ npm install

## Start Server

	$ gulp

This task cleans the output folder (`/dist`), compiles all web files, and runs a local server for development, watching for changes.

Open http://localhost:8080/

# TODO

* Add `package-lock.json` to `.gitignore`
* Suggest modifying `.gitignore` to remove what's needed for actual projects