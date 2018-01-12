const gulp = require('gulp');
const webserver = require('gulp-webserver');
const urls = require('url');
const path = require('path');
const fs = require('fs');
gulp.task('web', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8080,
            fallback: 'index.html',
            livereload: true
        }))
})
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8888,
            middleware: function(req, res, next) {
                const url = urls.parse(req.url);
                const pathname = url.pathname;
                const method = req.method;
                res.setHeader('Access-Control-Allow-Origin', '*')
                if (method === 'POST') {
                    let data = '';
                    req.on('data', function(chunk) {
                        data += chunk
                    })
                    req.on('end', function() {
                        switch (pathname) {
                            case '/data':
                                res.writeHead(200, {
                                    'content-type': 'application/json;charset=utf-8'
                                })
                                const paths = pathname.split('/')[1];
                                const pathUrl = path.join(__dirname, 'data', paths + '.json');
                                res.end(fs.readFileSync(pathUrl))
                                res.end()
                                break;
                            default:
                                break;
                        }
                    })
                }
            }
        }))
})
gulp.task('default', ['web', 'webserver'])