app.directive('music', function() {
    return {
        templateUrl: 'html/musicChild.html',
        replace: true,
        link: function(scope, ele, attr) {
            const obj = ['content/music/王乐乐 - 雨后人去楼也空.mp3', 'content/music/MC小孩 - 阳光不燥微风正好.mp3', 'content/music/王嘉尔 - OKAY.mp3', 'content/music/G.E.M. 邓紫棋 - Victoria.mp3', 'content/music/PRC 巴音汗 - 80000 !.mp3', 'content/music/李玉刚 - 刚好遇见你.mp3'];
            scope.obj = obj;
            scope.songs = obj[0];
            scope.musicClick = function(id) {
                obj.forEach(function(v, i) {
                    if (i === id) {
                        scope.songs = v
                        ele[0].childNodes[3].childNodes[3].autoplay = true
                        ele[0].childNodes[3].childNodes[3].play()
                    }
                })
            }
        }
    }
})