app.run(['$rootScope', function($rootScope) {
    const dogo = window.localStorage;
    let into = JSON.parse(dogo.getItem('into'));
    if (into == null || into == undefined) {
        window.location.href = '#/login'
    }
}]);