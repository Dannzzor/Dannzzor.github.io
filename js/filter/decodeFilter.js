(function() {
    angular
        .module('DRDapp')
        .filter('decode', decode);

    function decode() {
        return function(string, type) {
            string = decodeURIComponent(string);
            switch (type) {
                case 'priority':
                    string = string.split(') ')[1];
                    break;
                default:
            }
            return string;
        };
    }
})();