app.controller('shop', ['$scope', 'myData2', '$stateParams', function($scope, myData2, $stateParams) {
    $scope.pro = myData2;
    $scope.checked = false;
    $scope.amount = 0;
    $scope.total = 0;
    if ($stateParams.id == '') {
        $scope.default = "亲，请登录"
    } else {
        $scope.default = '亲爱的，' + $stateParams.id;
    }
    //加
    $scope.plus = function($index) {
        $scope.amount = 0;
        $scope.total = 0;
        $scope.pro.value.map(function(v, i) {
            if ($index == i) {
                v.count++;
            }
            if (v.isCheck) {
                $scope.amount += v.price * v.count
                $scope.total += v.count
            }
        })
    };
    //减
    $scope.minus = function($index) {
        $scope.amount = 0
        $scope.total = 0
        $scope.pro.value.map(function(v, i) {
            if ($index == i) {
                if (v.count <= 0) {
                    return
                }
                v.count--;
            }
            if (v.isCheck) {
                $scope.amount += v.price * v.count
                $scope.total += v.count
            }
        })
    };
    //关闭
    $scope.clost = function($index) {
        const dl = document.querySelectorAll('dl');
        [...dl].forEach(function(v, i) {
            if ($index == v.id) {
                v.parentNode.removeChild(v);
            }
        })
    };
    //点击子的多选框
    $scope.checkC = function(bool) {
        let str = 0;
        this.$parent.pro.value.forEach(function(v) {
            if (v.isCheck) {
                str++;
            } else {
                $scope.checked = false
            }
        })
        if (str == this.$parent.pro.value.length) {
            $scope.checked = true
        }
        $scope.plus()
        $scope.minus()
    };
}])