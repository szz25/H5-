app.controller('login', ['$scope', '$window', '$state', function($scope, $window, $state) {
    const dogo = window.localStorage;
    $scope.deng = function(name, pass) {
        let that = this;
        let arr = { id: 3, name: name, pw: pass };
        let into = JSON.parse(dogo.getItem('into'));
        if (into != null || into != undefined) {
            if (name == undefined || pass == undefined) {
                $window.location.href = '#/login'
            } else {
                into.forEach(function(v) {
                    if (v.name === arr.name && v.pw === arr.pw) {
                        $state.go('homePage', { id: name })
                        $scope.name = '';
                        $scope.pass = '';
                    } else {
                        $scope.error1 = "账号或密码不正确"
                        $window.location.href = '#/login';
                        $scope.name = '';
                        $scope.pass = '';
                    }
                })
            }
        }
    }
}])