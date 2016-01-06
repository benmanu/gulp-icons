/**
 * Tasks:
 *     gulp             (default prod task)
 *     gulp icon        (icon generator task)
 *     gulp clean       (icon directory wipe task)
 */

// requirements
var gulp        = require('gulp');

require('./gulp-icons')(gulp);

// clean and run
gulp.task('default', ['icons']);
