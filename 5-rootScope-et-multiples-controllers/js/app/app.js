/*
 * Pas sur que ce soit la meilleure façon d'écrire de fichier, mais ça me plaît !
 * A voir plus tard...
 */

angular.module('todo.app', ['todo.controllers']).config(appConfig).run(appRun);

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
