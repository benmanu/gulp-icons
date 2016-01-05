/**
 * Tasks:
 *     gulp             (default prod task)
 *     gulp icon        (icon generator task)
 *     gulp clean       (icon directory wipe task)
 */

// requirements
var gulp        = require('gulp');
var clean       = require('gulp-clean');
var glob        = require('glob');
var gulpicon    = require('gulpicon/tasks/gulpicon');

// source paths
var base = 'themes/default/'; // theme root
var src = base + 'icons/';
var dist = base + 'dist/icons/';

// grab the file paths
var files = glob.sync('./' + src + '*.svg');

var gulpicon_config = {
    // output destination
    dest: './' + dist,

    // CSS filenames
    datasvgcss: 'icons.data.svg.css',
    datapngcss: 'icons.data.png.css',
    urlpngcss: 'icons.fallback.css',

    // preview HTML filename
    previewhtml: 'preview.html',

    // grunticon loader code snippet filename
    loadersnippet: 'grunticon.loader.js',

    // Include loader code for SVG markup embedding
    enhanceSVG: true,

    // Make markup embedding work across domains (if CSS hosted externally)
    corsEmbed: false,

    // folder name (within dest) for png output
    pngfolder: 'png',

    // prefix for CSS classnames
    cssprefix: '.icon-',

    defaultWidth: '300px',
    defaultHeight: '200px',

    // define vars that can be used in filenames if desirable,
    // like foo.colors-primary-secondary.svg
    colors: {
        blue: '#0275D8',
        purple: '#594080',
        grey: '#555555'
    },

    dynamicColorOnly: false,

    // css file path prefix
    // this defaults to '/' and will be placed before the 'dest' path
    // when stylesheets are loaded. It allows root-relative referencing
    // of the CSS. If you don't want a prefix path, set to to '
    cssbasepath: '/',
    customselectors: {
        'cat' : ['#el-gato'],
        'gummy-bears-2' : ['nav li a.deadly-bears:before']
    },

    template: src + '/default-css.hbs',
    previewTemplate: src + '/preview-custom.hbs',

    compressPNG: true
};

// run the task
gulp.task('icon', ['clean'], gulpicon(files, gulpicon_config));

gulp.task('clean', function() {
    return gulp.src(dist, {read: false})
        .pipe(clean());
});

// clean and run
gulp.task('default', ['icon']);
