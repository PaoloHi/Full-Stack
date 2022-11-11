const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');



function css(done){
    src('src/scss/**/*.scss')//identificar el archivo de SASS
        .pipe(plumber())
        .pipe( sass())//compilarlo 
        .pipe(dest("build/css"))    //almacenarla en el disco duro 
    done();//calll back que avisa a gulp cuando lllega al final 
}

function dev(done){
    watch('src/scss/app.scss',css);
    done();
}

exports.css = css;
exports.dev = dev;