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
        {'name': 'Kilograms',   'shorthand': 'kgs',         'type': 'weight'},
        {'name': 'Grams',       'shorthand': 'gs',          'type': 'weight'},
        {'name': 'Pounds',      'shorthand': 'lbs',         'type': 'weight'},
        
        {'name': 'Meters',      'shorthand': 'm',           'type': 'length'},
        {'name': 'Centimetres', 'shorthand': 'cm',          'type': 'length'},
        {'name': 'Kilomtres',   'shorthand': 'km',          'type': 'length'},
        {'name': 'Inches',      'shorthand': 'inch',        'type': 'length'},
        {'name': 'Yards',       'shorthand': 'yd',          'type': 'length'},
        {'name': 'Miles',       'shorthand': 'mile',        'type': 'length'},

        {'name': 'Litres',      'shorthand': 'l',           'type': 'volume'},
        {'name': 'Centilitre',  'shorthand': 'cl',          'type': 'volume'},
        {'name': 'Mililitre',   'shorthand': 'ml',          'type': 'volume'},
        {'name': 'Gallon',      'shorthand': 'g',           'type': 'volume'},

        {'name': 'Celius',      'shorthand': 'c',           'type': 'temp'},
        {'name': 'Kelvin',      'shorthand': 'k',           'type': 'temp'},
        {'name': 'Farenheight', 'shorthand': 'f',           'type': 'temp'}
    ];

    $scope.convertValue = 0;
    $scope.convertType = $scope.types[0];
    $scope.convertUnit = $scope.units[0];
});

    