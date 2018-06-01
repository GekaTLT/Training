'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    server  = require('gulp-server-livereload'),
    spritesmith  = require('gulp.spritesmith'),
    svgSprite = require("gulp-svg-sprites");


// development--------------------------------------------
 gulp.task('html',function () {
    gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('build'));
 });

 gulp.task('img',function () {
    gulp.src('src/img/**.*')
    .pipe(gulp.dest('build/img'))
 });

 gulp.task('font',function () {
    gulp.src('src/font/**.*')
    .pipe(gulp.dest('build/font'))
 });

 gulp.task('sass',function () {
    gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('build/css'))
 });

gulp.task('js',function() {
    gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
});

gulp.task('start',function () {
    gulp.src('build').pipe(server({
        livereload : true ,
        open : true,
    }));
    gulp.watch('src/sass/**/*.scss',['sass']);
    gulp.watch('src/html/**/*.html',['html']);
    gulp.watch('src/img/**.*',['img']);
    gulp.watch('src/font/**.*',['font']);
    gulp.watch('src/js/**.*',['js']);
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/sprite/sources/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite_contact.png',
                cssName: 'sprite.css',
                algorithm : 'top-down',
            }));

    spriteData.img.pipe(gulp.dest('./src/sprite/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/sprite/')); // путь, куда сохраняем стили
});

gulp.task('svg', function () {
    gulp.src('./src/sprite/sources/*.svg')
    .pipe(svgSprite({
        /*selector: "i-sp-%f", */   /*этот параметр отвечает за префикс классов при генерации стилей (.i-sp-название-файла)*/
        svg: {
            sprite: "sprite.svg" /*название спрайта*/
            },
        /*svgPath: "%f",*/ /*путь к файлу спрайтов*/
        cssFile: "sprite.css" /*генерируемый css файл*/
        /*,common: "ic"*/ /*по умолчанию родительский класс всех иконок будет icon, так вот параметр common меняет его на произвольный*/
        }))
    .pipe(gulp.dest('./src/sprite/'));
});
// development end--------------------------------------------
