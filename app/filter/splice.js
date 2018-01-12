app.filter('splice', function() {
    return function(obj, num) {
        return obj.slice(num)
    }
})