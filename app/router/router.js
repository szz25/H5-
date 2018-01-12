app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('homePage/')
    $stateProvider.state('homePage', {
            url: '/homePage/:id',
            templateUrl: './html/homePage.html',
            resolve: {
                myData1: 'ajax',
                myData2: function(myData1) {
                    return myData1.getJson({
                        url: 'http://localhost:8888/data',
                        method: 'POST'
                    })
                }
            },
            controller: 'shop'
        })
        .state('login', {
            url: '/login',
            templateUrl: './html/login.html'
        })
        .state('enroll', {
            url: '/enroll',
            templateUrl: './html/enroll.html',
            controller: 'main'
        })
        .state('shopping', {
            url: '/shopping',
            templateUrl: './html/shopping.html',
            resolve: {
                myData1: 'ajax',
                myData2: function(myData1) {
                    return myData1.getJson({
                        url: 'http://localhost:8888/data',
                        method: 'POST'
                    })
                }
            },
            controller: 'shop'
        })
        .state('child', {
            url: '/child',
            templateUrl: './html/child.html',
            params: { id: 1 },
            resolve: {
                myData: 'ajax',
                dataChild: function(myData) {
                    return myData.getJson({
                        url: 'http://localhost:8888/data',
                        method: 'POST'
                    })
                }
            },
            controller: ['$scope', '$stateParams', 'dataChild', '$timeout', function($scope, $stateParams, dataChild, $timeout) {
                $timeout(function() {
                    $scope.childData = dataChild
                    $scope.childData.value.forEach(function(v, i) {
                        if ($stateParams.id == i) {
                            $scope.childProct = v
                        }
                    })
                }, 10)
            }]
        })
        .state('music', {
            url: '/music',
            templateUrl: './html/music.html'
        })
}])