(function () {
    'use strict';

    var app = angular.module('todo.app', ['todo.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    }

    function appRun($rootScope) { // Injection du rootScope en paramètre
        console.log('Application started...');

        $rootScope.user = {
            LastName: 'Rebirth',
            FirstName: 'Robomatix'
        };

    }
})();
