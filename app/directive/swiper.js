app.directive('swiper', [function() {
    return {
        replace: true,
        template: `<div class="img">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide" ng-repeat="val in pro.value">
                                <img ng-src="{{val.image}}" alt="">
                            </li>
                        </ul>
                        <ol>
                            <li ng-class="bage" ng-repeat="val in pro.value" ng-click="btn(val.id)">{{val.id}}</li>
                        </ol>
                        <button class="prev" ng-click="prev()"><</button>
                        <button class="next" ng-click="next()">></button>
                    </div>`,
        link: function(scope, ele, attr) {
            const left = document.getElementsByClassName('prev')[0],
                right = document.getElementsByClassName('next')[0],
                img = document.getElementsByClassName('img')[0],
                ul = img.getElementsByTagName('ul'),
                lius = ul[0].getElementsByTagName('li'),
                ol = img.getElementsByTagName('ol'),
                lios = ol[0].getElementsByTagName('li');
            let j = 0,
                timer = null;

            function foreach() {
                for (let i = 0; i < lius.length; i++) {
                    lios[i].className = "";
                    lius[i].style.display = "none"
                }
            }
            scope.next = function() {
                j++;
                if (j > lius.length - 1) j = 0;
                foreach()
                lios[j].className = "bg";
                lius[j].style.display = "block"
            }

            timer = setInterval(function() {
                scope.next()
            }, 1000);
            img.onmousemove = function() {
                clearInterval(timer);
            }
            img.onmouseout = function() {
                timer = setInterval(function() {
                    scope.next()
                }, 1000);;
            }
            scope.btn = function(id) {
                foreach()
                if ((id - 1) > lius.length - 1) j = 0;
                lios[(id - 1)].className = "bg";
                lius[(id - 1)].style.display = "block"
            }
            scope.prev = function() {
                j--;
                if (j < 0) j = 4;
                foreach()
                lios[j].className = "bg";
                lius[j].style.display = "block"
            }
        }
    }
}])