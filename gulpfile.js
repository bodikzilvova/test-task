// import gulp from "gulp";
// import * as dartSass from "sass";
// import gulpSass from "gulp-sass";
// import concat from "gulp-concat";
// import uglify from "gulp-uglify-es";
// import browserSync from "browser-sync";
// import autoprefixer from "gulp-autoprefixer";
// import clean from "gulp-clean";
// import include from "gulp-include";
// const { src, dest, watch, parallel, series } = gulp;
// const scss = gulpSass(dartSass);
// const browserSyncInstance = browserSync.create();
// const uglifyInstance = uglify.default;

// function pages(){
//   return src('app/pages/*.html')
//   .pipe(include({
//     includePaths: 'app/components'
//   }))
//   .pipe(dest('app'))
//   .pipe(browserSyncInstance.stream());
// }


// function styles() {
//   return src("app/scss/style.scss")
//     .pipe(autoprefixer({ overrideBrowserslist: ["last 5 versions"] }))
//     .pipe(concat("style.min.css"))
//     .pipe(scss({ outputStyle: "compressed" }))
//     .pipe(dest("app/css"))
//     .pipe(browserSyncInstance.stream());
// }

// function scripts() {
//   return src("app/js/main.js")
//     .pipe(concat("main.min.js"))
//     .pipe(uglifyInstance())
//     .pipe(dest("app/js"))
//     .pipe(browserSyncInstance.stream());
// }

// function watching() {
//   browserSyncInstance.init({
//     server: {
//       baseDir: "app/",
//     },
//   });
//   watch(["app/scss/**/*.scss"], styles);
//   watch(["app/js/**/*.js"], scripts);
//   watch(["app/components/**/*.html", "app/pages/**/*.html"], pages);
//   watch(["app/*.html"]).on("change", browserSyncInstance.reload);

// }

// function cleanDist() {
//   return src("dist", { allowEmpty: true }).pipe(clean());
// }

// function building() {
//   return src(
//     [
//       "app/css/style.min.css",
//       "app/images/dist/*.*",
//       "app/js/main.min.js",
//       "app/*.html",
//     ],
//     {
//       base: "app",
//     }
//   ).pipe(dest("dist"));
// }

// export const build = series(cleanDist, building);
// export { styles, scripts, watching, building, pages };

// export default parallel(styles, scripts, pages, watching);

import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify-es";
import browserSync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import clean from "gulp-clean";
import include from "gulp-include";
import replace from "gulp-replace"; 
const { src, dest, watch, parallel, series } = gulp;
const scss = gulpSass(dartSass);
const browserSyncInstance = browserSync.create();
const uglifyInstance = uglify.default;

function pages() {
  return src('app/pages/*.html')
    .pipe(include({
      includePaths: 'app/components'
    }))
    .pipe(replace('<base href="/">', '<base href="/Bohdan_Shveda/">')) 
    .pipe(dest('app'))
    .pipe(browserSyncInstance.stream());
}

function styles() {
  return src("app/scss/style.scss")
    .pipe(autoprefixer({ overrideBrowserslist: ["last 5 versions"] }))
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(browserSyncInstance.stream());
}

function scripts() {
  return src("app/js/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglifyInstance())
    .pipe(dest("app/js"))
    .pipe(browserSyncInstance.stream());
}

function watching() {
  browserSyncInstance.init({
    server: {
      baseDir: "app/",
    },
  });
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js"], scripts);
  watch(["app/components/**/*.html", "app/pages/**/*.html"], pages);
  watch(["app/*.html"]).on("change", browserSyncInstance.reload);
}

function cleanDist() {
  return src("dist", { allowEmpty: true }).pipe(clean());
}

function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/images/dist/*.*",
      "app/js/main.min.js",
      "app/*.html",
    ],
    {
      base: "app",
    }
  )
  .pipe(dest("dist/Bohdan_Shveda"));
}

export const build = series(cleanDist, building);
export { styles, scripts, watching, building, pages };

export default parallel(styles, scripts, pages, watching);