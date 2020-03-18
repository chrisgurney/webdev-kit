# Webdev Kit

Very basic starting point for web development.

Does not include web tooling for deployments (minification, etc.)

# Getting Started

## Setup Mac

Install XCode Command Line Developer Tools:

	$ xcode-select --install

Install node/npm from https://nodejs.org/

Install Gulp CLI:

	$ sudo npm install --global gulp-cli

## Install

    $ cd /path/to/project
    $ npm install

## Start Server

	$ gulp

The default task cleans the output folder (`/dist`), compiles all web files, and runs a local server for development, watching for changes.

Open http://localhost:8080/

# TODO

* Add to README: Run `gulp clean` to reset output folder
* Add to README: Install LiveReload plugin?
* Add to README: Modify `.gitignore` to remove what's needed for actual projects
* Add to README: Mention modifying paths in `gulpfile.config.json`