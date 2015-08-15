/*
 * Pas sur que ce soit la meilleure façon d'écrire de fichier, mais ça me plaît !
 * A voir plus tard...
 */

angular.module('todo.app', ['todo.controllers']).config(appConfig).run(appRun);

function appConfig() {
    console.log('Configuring application...');
}

function appRun() {
    console.log('Application started...');
}
