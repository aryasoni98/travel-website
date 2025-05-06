const gulp = require('gulp');
const { argv } = require('yargs');
const htmlValidator = require('gulp-html-validator');
const through = require('through2');
const ansi = require('ansi');

const { paths, baseDir } = require('./utils');

const cursor = ansi(process.stdout);

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|   w3c validation for HTML
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('w3cjs', (done) => {
  let htmlfiles = `${baseDir}/${paths.pug.dest}/**/*.html`;
  if (argv.html) {
    htmlfiles = `${paths.dir.dev}/${argv.html}.html`;
    cursor.hex('#00ffff').bold();
    console.log('html: ', htmlfiles);
    cursor.reset();
  }

  return gulp
    .src(htmlfiles)
    .pipe(htmlValidator())
    .pipe(through.obj((file, enc, cb) => {
      if (!file.htmlValidator.valid) {
        console.log({
          url: file.history[0],
          messages: file.htmlValidator.messages,
        });
      }
      cb();
    }))
    .on('end', () => {
      done();
    });
});

gulp.task('w3c', gulp.series('pug', 'w3cjs'));
