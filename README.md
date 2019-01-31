# Gulpfile.js for WordPress Themes and WordPress Plugins - v1.0.0

![Gulpfile.js for WordPress In Terminal](/gulpfile.js/tests/assets-src/images/terminal.png?raw=true){ width="678" height="148" style="display: block; margin: 0 auto" }

An example gulpfile.js setup for WordPress theme and WordPress plugin development.

Past the requirements below, this project works out-of-the-box. Simply clone the project, install dependencies, and then run the gulp commands to see the project in action.

## Requirements

Check that you have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm), [gulp](https://gulpjs.com/docs/en/getting-started/quick-start) and [composer](https://getcomposer.org/download/) installed.

```
node -v
npm -v
gulp -v
composer --version
```

## Installation

Clone the gulpfile.js repo

```
git clone https://github.com/ChrisWinters/gulpfile.git gulpfile_test
cd gulpfile_test
```
Install Dependencies

```
npm install --save-dev
```

## Commands

* ``` gulp assets ``` to copy project assets to a temporary destination asset location
* ``` gulp all ``` to compile all stylesheets & scripts, compress images, and create the translation file
* ``` gulp watch ``` to live reload changes made to the assets src
* ``` gulp styles ``` to compile the style.css, style.map.css, and style.min.css files
* ``` gulp scripts ``` to compile the scripts.js and scripts.min.js files
* ``` gulp images ``` to compress png, jpeg, gif, and svg files
* ``` gulp translate ``` to compile the text_domain.pot language file
* ``` gulp bump ``` to bump version numbers in the README.md and package.json files
* ``` gulp clean ``` to remove the temporary /assets/ directory


## Configuration

Open ``` /gulpfile/config.json ```


```
{
	"project_url" : "gulpfile.localhost",
	"js_dest" : "./gulpfile.js/tests/js",
	"css_dest" : "./gulpfile.js/tests/css",
	"imgs_dest" : "./gulpfile.js/tests/images",
	"assets_src" : "./gulpfile.js/tests/assets-src",
	"assets_dest" : "./gulpfile.js/tests/assets-dest",
	"language_dest" : "./gulpfile.js/tests/lang",
	"text_domain" : "gulpfile",
	"bug_report" : "https://github.com/ChrisWinters/gulpfile/issues",
	"translator_contact" : "Nobody <nobody@nobody.com>",
	"team_contact" : "Nobody <nobody@nobody.com>"
}
```

Themes and plugins will replace ``` ./gulpfile.js/tests ``` with ``` ./ ```.

```
{
	"js_dest" : "./js",
	"css_dest" : "./css",
	"imgs_dest" : "./images",
	"assets_src" : "./inc/assets",
	"assets_dest" : "./assets",
	"language_dest" : "./lang",
}
```

### Settings

* **project_url** Used for the ``` gulp watch ``` command, set to your locally hosted project domain
* **js_dest** Public facing /js directory that stores compiled scripts
* **css_dest** Public facing /css directory that stores compiled stylesheets
* **imgs_dest** Public facing /images directory that stores compressed images
* **assets_src** Custom location where a themes/plugins would store 'core' SCSS/CSS & JavaScript files
* **assets_dest** Custom temporary location where vendor and theme/plugin assets are copied to
* **language_dest** Public facing /lang directory that stores the .pot translation file
* **text_domain** The textdomain used for your project
* **bug_report** The URL where people can report translation related issues
* **translator_contact** The contact information for the translator
* **team_contact** The contact information for the translator team

The ``` assets_src ``` and ``` assets_dest ``` paths are vital to making the gulp tasks work correctly.

Most themes and plugins will set the paths like the example below, assuming core assets are located in a directory named /inc/.

```
{
	"assets_src" : "./inc/assets",
	"assets_dest" : "./assets",
}
```

Gulp will copy core assets from ``` assets_src ``` and into the temporary ``` assets_dest ``` location.


## Customization

Most projects will require various customizations to the gulp tasks located in ``` /gulpfile/tasks ```

For example, the ``` assets.js ``` file copies assets from ``` assets_src ``` to ``` assets_dest ```. One of those assets is [Bootstrap 4](https://getbootstrap.com/), copied from the 'node_modules' directory, which your project may not need.

### Files

* assets.js 	Copies assets from ``` assets_src ``` to ``` assets_dest ```
* bump.js 		Currently bumps version numbers in README.md & package.json files, other files will need to be manually added
* default.js 	The ``` watch ``` task may need to be customized to match your project layout
* images.js 	The ``` image ``` task may need to be customized to match your project layout
* index.js 		No customizations needed
* scripts.js 	Typically this file needs to be updated anytime the project adds new 3rd party JavaScript files
* styles.js 	Typically this file needs to be updated anytime the project adds new 3rd party SCSS files
* translate.js 	Creates .pot translation file, typically does not need customizations

* config.json 	Gulp configuration file explained above
* index.js 		No customizations needed


## The Node Modules Directory

Add the /node_modules/ directory to your .gitignore file ``` node_modules/* ``` and if you ftp/upload your projects, do not upload the /node_modules/ directory.

Once a project is completed manually delete the /node_modules/ directory.

Run ``` npm install ``` to restart the project, adding the /node_modules/ directory back to the project.


## MIT License

[License](https://github.com/ChrisWinters/gulpfile/LICENSE)

Copyright 2019 Chris Winters https://github.com/ChrisWinters/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

P.S. A little link love back to this repo from your projects repo would be much appreciated but not required.
