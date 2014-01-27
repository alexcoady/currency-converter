/* Controllers */
var phonecatApp = angular.module('alexApp', []);

phonecatApp.controller('alexController', function($scope) {
  
    $scope.types = [
        {'name': 'Weight', 'id': 'weight' },
        {'name': 'Length', 'id': 'length' },
        {'name': 'Volume', 'id': 'volume' },
        {'name': 'Temperature', 'id': 'temp' }
    ];

    $scope.units = [
        {'name': 'Kilograms',   'shorthand': 'kgs',         'type': 'weight',       'mult': 1},
        {'name': 'Grams',       'shorthand': 'gs',          'type': 'weight',       'mult': 1000},
        {'name': 'Pounds',      'shorthand': 'lbs',         'type': 'weight',       'mult': 2.20462},
        
        {'name': 'Meters',      'shorthand': 'm',           'type': 'length',       'mult': 1},
        {'name': 'Centimetres', 'shorthand': 'cm',          'type': 'length',       'mult': 100},
        {'name': 'Kilomtres',   'shorthand': 'km',          'type': 'length',       'mult': 0.001},
        {'name': 'Inches',      'shorthand': 'inch',        'type': 'length',       'mult': 39.3700787},
        {'name': 'Yards',       'shorthand': 'yd',          'type': 'length',       'mult': 1.0936133},
        {'name': 'Miles',       'shorthand': 'mile',        'type': 'length',       'mult': 0.000621371192},

        {'name': 'Litres',      'shorthand': 'l',           'type': 'volume',       'mult': 1},
        {'name': 'Centilitre',  'shorthand': 'cl',          'type': 'volume',       'mult': 100},
        {'name': 'Mililitre',   'shorthand': 'ml',          'type': 'volume',       'mult': 1000},
        {'name': 'Gallon',      'shorthand': 'g',           'type': 'volume',       'mult': 0.219969},

        {'name': 'Celius',      'shorthand': 'c',           'type': 'temp',         'mult': 1},
        {'name': 'Kelvin',      'shorthand': 'k',           'type': 'temp',         'mult': 1},
        {'name': 'Farenheight', 'shorthand': 'f',           'type': 'temp',         'mult': 1}
    ];

    $scope.convertValue = 0;
    $scope.convertType = $scope.types[0];
    $scope.convertUnit = $scope.units[0];
});

    