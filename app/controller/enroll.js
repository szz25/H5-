app.controller('main', ['$scope', '$window', function($scope, $window) {
    $scope.data = [{
            id: "1",
            name: "zhangsan",
            pw: "123456"
        },
        {
            id: "2",
            name: "lisi",
            pw: "123456"
        }
    ];
    const dogo = window.localStorage;
    $scope.zc = function(name, pass) {
        let that = this;
        let obj = { name: name, pw: pass };
        if (!dogo.getItem('into')) {
            dogo.setItem('into', JSON.stringify($scope.data));
        }
        var into = JSON.parse(dogo.getItem('into'));
        let bool = true;
        if (name == undefined || pass == undefined) {
            $window.location.href = '#/enroll'
        } else {
            if (into == null || into == undefined) {
                fn(obj, into)
            } else {
                into.forEach(function(v) {
                    if (v.name == obj.name || v.pw == obj.pw) {
                        bool = false
                        $window.location.href = '#/enroll';
                        $scope.error = "账号已注册";
                        $scope.name1 = '';
                        $scope.pass1 = '';
                    }
                })
                if (bool) {
                    fn(obj, into)
                }

            }
        }
    }

    function fn(obj, into) {
        into.push(obj);
        dogo.setItem('into', JSON.stringify(into));
        $scope.user1 = '';
        $scope.pass1 = '';
        $window.location.href = '#/login'
    }
}])