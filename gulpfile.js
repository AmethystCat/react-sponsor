var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    lessMap = require('gulp-less-sourcemap'),//less编译(替代gulp-less)并产生sourcemap
    rename = require('gulp-rename'),
    del = require('del'),//文件删除
    bs = require('browser-sync').create(),//静态服务器
    notify = require('gulp-notify');

var SCRIPTENTRIES = './src/entries/**/*.js',
      SCRIPTS = './src/**/*.jsx';

var LESS = './assets/less/*.less',
      CSS = './assets/css/*.css';

var handleError = function(){
	var args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: 'compile error',
		message: '<%= error.message %>'
	}).apply(this,args);
	this.emit('close');
	this.emit('end');
};

//清除目录
gulp.task('clean',function(){
	del(['tem/']);
});

//编译less
gulp.task('compile-less',function(){
	console.log('less-compile');
	return gulp.src(LESS)
		   .pipe(lessMap({
		   	sourceMap: {
		   		sourceMapRootpath: LESS
		   	}
		   }))
		   .on("error", handleError)
		   .pipe(gulp.dest('./assets/css'))
});

//编译脚本
gulp.task('watch',function(){
	gulp.watch(SCRIPTS, ['compile-script']);
	gulp.watch(LESS, ['compile-less']);

	gulp.watch(CSS).on('change',function(){
		console.log('css refresh');
		bs.reload(CSS);
	});
	gulp.watch('./tem/**/*.js').on('change', function() {
		bs.reload();
	});
});

//TODO 用watchify 来优化browserify打包
gulp.task('compile-script',function() {
	var TEM = './tem',
		ENTRY = './src/entries/';

	browserify('./src/entries/index.js')
    	.transform(reactify)
	.bundle()
	.pipe(source('index.js'))
	.pipe(notify('index.js compiled'))
	.pipe(gulp.dest('./tem'));

	browserify('./src/entries/sponsorDetail.js')
    	.transform(reactify)
	.bundle()
	.pipe(source('sponsorDetail.js'))
	.pipe(notify('sponsorDetail.js compiled'))
	.pipe(gulp.dest('./tem'));

	browserify('./src/entries/sponsorList.js')
    	.transform(reactify)
	.bundle()
	.pipe(source('sponsorList.js'))
	.pipe(notify('sponsorList.js compiled'))
	.pipe(gulp.dest('./tem'));

	browserify('./src/entries/sponsorPublish.js')
    	.transform(reactify)
	.bundle()
	.pipe(source('sponsorPublish.js'))
	.pipe(notify('sponsorPublish.js compiled'))
	.pipe(gulp.dest('./tem'));

});

gulp.task('default',['compile-script','compile-less'],function(){
	bs.init({
		server:'./'
	});
	gulp.start('watch');
});
