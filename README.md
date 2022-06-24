# Chuck Norris Jokes

## Getting Started

To begin, you'll need to install npm packages:
```
npm install
```

To run dev server, use:
```
npm run dev
```

To make build, run:
```
npm run build
```

## Style Guide

### 1. The "Mobile First" principle

All styles should be written for mobile first and then scaled for tablets, laptops and widescreen displays using media queries.

### 2. Architecture

```
scss/
|
| abstracts/
|   | _functions.scss  # Scss variables
|   | _mixins.scss     # Scss mixins
|   | _functions.scss  # Scss functions
|
| base/
|   | _base.scss       # Base styles
|   | _fonts.scss      # Typography
|   | _reset.scss      # Reset
|
| components/          # Component styles
|   | _buttons.scss
|   ...
|
| layout/              # Layout styles
|   | _header.scss
|   | _footer.scss
|   ...
|
| pages/               # Pages styles
|   | _product.scss
|   | _news.scss
|   ...
| main.scss            # Main Scss file
```

`abstracts/` folder contains all tools and helpers in project. Every global variable, function and mixin should be placed here.

`base/` folder contains what we can call a generic project template. There you can find a reset file, some typographical rules, and styles defining some standard styles for commonly used HTML elements.

The `layout/` folder contains everything that is involved in building the layout of a site. This folder can contain styles for the main parts of the site (header, footer, navigation, sidebar, etc.).

For small components, there is a `components/` folder. While `layout/` is the main one (defines the overall framework), the code inside `components/` is more widget focused and contains all the modules like slider, buttons and similar widgets.

If you have page-specific styles, it's best to put them in the `pages/` folder, in a file named like the page.

Main file `main.scss` should contain nothing but `@import` and comments.

Files must be imported one by one, in the following order:
1. abstracts/
2. vendors/
3. base/
4. layout/
5. components/

> Now we don't have `vendors/` folder, so you should import vendors libraries from packages folders that are placed in `npm_modules/` folder.

### 3. Syntax and formatting

Basic requirements:
- two (2) space indents, no tabs;
- a space before our opening brace (`{`);
- a space after our property–value delimiting colon (`:`);
- a trailing semi-colon (`;`) on our last declaration;
- our closing brace (`}`) on its own new line.

```scss
// Yes
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// No
.foo{
    display: block; overflow: hidden;

    padding: 0 1em;
}
```

When working with lengths, `0` (zero) should never have a unit of measurement. This rule does not apply to time properties such as `transition-delay`.

```scss
// Yes
$length: 0;

// No
$length: 0em;
```

Numerical calculations must always be in parentheses.

```scss
// Yes
.foo {
  width: (100% / 3);
}

// No
.foo {
  width: 100% / 3;
}
```

The set of rules should be written as follows:
- related selectors on the same line;
- unrelated selectors on new lines;
- each declaration on its own new line.

```scss
// Yes
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// No
.foo,
.foo-bar, .baz{
  display: block;
  overflow: hidden;
  margin: 0 auto }
```

### 4. Using media queries

We are using the built-in `bootstrap` mixins to generate media queries:

For example, mixins:
```scss
@include media-breakpoint-up(sm) {
  // ...
}
@include media-breakpoint-up(md) {
  // ...
}
@include media-breakpoint-up(lg) {
  // ...
}
@include media-breakpoint-up(xl) {
  // ...
}
@include media-breakpoint-up(xxl) {
  // ...
}
```
... will generate the following set of media queries in CSS:
```css
@media (min-width: 576px) {
    /* ... */
}
@media (min-width: 768px) {
    /* ... */
}
@media (min-width: 992px) {
    /* ... */
}
@media (min-width: 1200px) {
    /* ... */
}
@media (min-width: 1400px) {
    /* ... */
}
```