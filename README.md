# odin-restaurant-page
This project is a project undertaken as part of `The Odin Project` learning web course teaching `HTML`, `CSS` and `JavaScript` skills. It involved putting into practice the teachings of `Webpack`, `Node Package Manager`, and the `DOM` to create an efficient, JavaScript-based restaurant page.

The project aims to put into practice the bundling and benefits of Webpack and get comfortable with packages and config files. A challenge that this project also provides is the need to generate HTML files dynamically through the use of programatically defined elements in JavaScript DOM. A plugin known as the `HTML Webpack Plugin` is used with multiple instances to automatically generate HTML files with the relevant chunks to assign scripts. Scripts contain imports with the dependancies required for the page they create and are bundled by webpack and placed in a distribution folder. 

The project itself contains three pages, a home, menu and contact page. Content is typical of a Japanese restaurant food provider and do not reflect the actual functions of real-world fast-food chains. We use this template to demonstrate skills developed in the related areas and we are able to generate interactive, responsive pages all through JavaScript.

## Features

- **JavaScript-Based** - Page structure and interactivity is handled through JavaScript and the use of HTML Webpack Plugin to generate HTML files. Scripts are injected into generated pages through the specified entry points and chunks of each page. Scripts contain DOM statements and methods to create and append elements to the body of the document. 

- **Webpack Bundling and Optimization** - Webpack scans the imports made from files in the src folder and bundles these for optimization purposes. Files include .ttf truetype, .css cascading stylesheets, and .jpg images. We use packages such as `css loader` and `style loader` to access css content and inject this into the style tags of generated HTML documents. 

- **Responsive using Grid and Media Queries** - Pages are responsive with support for both desktop and mobile using the tools of Grid and Media Queries. A key functionality used is the use of `repeat()`, `autofill` and `minmax` with Grid to create a complex, responsive grid layout in the menu. Media Queries specify breakpoints of which we alter elements to accomodate the new viewport size.  

- **Novalidate and JavaScript Validation API** - The contact form although simple, uses the JavaScript Validation API to assess validation rules and the validity of the form through the script instead of the HTML page. We use `novalidate` to specify that we will handle validation ourselves and we assign error messages on each field to reflect the breaches to validation rules upon entry.