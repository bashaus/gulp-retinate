# gulp-retinate

[![npm version][img:npm]][url:npm]
[![build status][img:build-status]][url:build-status]

> [Gulp][url:gulp] plugin to automate scaling of images to target lower
  resolution or non-retina screens.

This project is based on
[gulp-retinize](https://github.com/mattidupre/gulp-retinize). Main changes
include the use of the [Sharp][url:sharp] image library instead of
[GM](https://github.com/aheckmann/gm) to resize images, reducing dependencies.

Also see: [posthtml-retinate](https://github.com/bashaus/posthtml-retinate)

&nbsp;

## Installation

```bash
npm install gulp gulp-retinate
```

&nbsp;

## Usage

```javascript
const gulp = require('gulp');
const retinate = require('gulp-retinate');

/* Default options */
const OPTIONS = {
  inputFlags: { 1: '@1x', 2: '@2x', 4: '@4x' },
  inputPlace: 'endsWith',
  outputFlags: { 1: '', 2: '@2x', 4: '@4x' },
  outputPlace: 'append',
  rounding: 'ceil',
  scaleUp: false
};

gulp.task('default', function () {
  return gulp.src('./src/**/*.{png,jpg,jpeg}')
    .pipe(retinate(OPTIONS))
    .on('error', e => console.log(e.message))
    .pipe(gulp.dest('./dest/'));
});
```

&nbsp;

## Options

### inputFlags

The flags the plugin will use to detect which source images should be resized.
Key is output resolution, value is flag.

* Since: `1.0.0`
* Property is `Optional`
* Default value is: `{ 1: '@1x', 2: '@2x', 4: '@4x' }`
* Validation rules:
  * Must be a hash `Object`

&nbsp;

### inputPlace

Whether to look for the flags at the beginning of the source image filename:

* Since: `1.0.0`
* Property is `Optional`
* Default value is: ```endsWith```
* Validation rules:
  * Must be either `startsWith` (e.g.: `@2ximage`) or `endsWith` (e.g.: `image@2x`)

&nbsp;

### outputFlags

The flags the plugin will append (or prepend) to the destination image files.
Key is output resolution, value is flag.

* Since: `1.0.0`
* Property is `Optional`
* Default value is: `{ 1: '', 2: '@2x', 4: '@4x' }`
* Validation rules:
  * Must be a hash `Object`

&nbsp;

### outputPlace

Whether to output the flags at the beginning of the destination image filename:

* Since: `1.0.0`
* Property is `Optional`
* Default value is: `append`
* Validation rules:
  * Must be either `prepend` (e.g.: `@2ximage`) or `append` (e.g.: `image@2x`)

&nbsp;

### rounding

Math function to round partial resolutions up (`ceil`) or down (`floor`).
For example, an @2x source image with dimensions of `35x35` will be scaled
to `18x18` by default.

* Since: `1.0.0`
* Property is `Optional`
* Default value is: `ceil`
* Validation rules:
  * Must be either `ceil` (to round up) or `floor` (to round down)

&nbsp;

### scaleUp

Whether to scale images up if they are only included at a lower resolution in
their source files.

If `true`, an images directory that includes only `image@2x.png` will output
destination files `image@4x.png` (scaled up), `image@2x.png` and `image.png`.

The output resolutions depend on the value of `outputFlags`.

* Since: `1.0.0`
* Property is `Optional`
* Default value is: `value`
* Validation rules:
  * Must be a valid `Boolean`

&nbsp;

[url:gulp]: https://github.com/gulpjs/gulp
[url:sharp]: http://sharp.dimens.io/en/stable/

[img:build-status]: https://travis-ci.org/bashaus/gulp-retinate.svg
[url:build-status]: https://travis-ci.org/bashaus/gulp-retinate

[img:npm]: https://img.shields.io/npm/v/gulp-retinate.svg
[url:npm]: https://www.npmjs.com/package/gulp-retinate
