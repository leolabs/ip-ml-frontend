'use strict';

import gulp from 'gulp';
import del from 'del';
import {PolymerProject, HtmlSplitter} from 'polymer-build';
import mergeStream from 'merge-stream';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const buildDir = 'build';
const project = new PolymerProject(require('./polymer.json'));
const $ = gulpLoadPlugins();

gulp.task('del', () => del(buildDir));

gulp.task('polymer', ['del'], () => {
    const htmlSplitter = new HtmlSplitter();

    return mergeStream(project.sources(), project.dependencies())
        .pipe(htmlSplitter.split())
        .pipe($.if(/\.css/, $.postcss({
            plugins: [
                autoprefixer({ browsers: ['last 2 versions'] }),
                cssnano()
            ]
        })))
        .pipe($.if(
            [
                '**/*.js',
                '!bower_components/{webcomponentsjs,firebase}/**/*'
            ],
            $.babili()
        ))
        .pipe($.if(/\.html$/, $.htmlmin({
            collapseWhitespace: true,
            removeComments: true
        })))
        .pipe(htmlSplitter.rejoin())
        .pipe(project.bundler())
        .pipe(gulp.dest(buildDir))
});

gulp.task('build', 'polymer');
gulp.task('default', ['build']);