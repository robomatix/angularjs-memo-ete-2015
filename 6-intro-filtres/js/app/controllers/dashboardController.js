/*
 * Alerte bonne pratique: Un controller étant considéré comme un constructeur en JavaScript, la même convention de nommage s’applique : adieu le camelCase et hello PascalCase.
 *
 * Le préfixe des noms de variables avec “$” définit en général des objets relatifs aux modules tiers AngularJS.
 *
 * Angular intègre, entre autre, le concept d’injection de dépendances.
 * Il suffit de lui demander et si l’objet recherché est référencé par le framework, il vous le fournira.
 * Dans notre cas, nous lui demandons deux objets : le rootScope et le scope.
 *
 * Le scope représente le modèle de l’application et le contexte d’exécution pour les expressions...
 *
 * Si j'ai bien compris, le rootscope s'applique à l'appli dans son intégralité et le scope seulement à la partie ou il est déclaré, notre contrôleur ici...
 *
 */

// Notez l'absence de deuxième paramètre.
// Nous ne faisons que récupérer un module existant.
(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('DashboardController', function ($rootScope, $scope) {
        $scope.title = 'Dashboard';
        $scope.userName = $rootScope.user.FirstName + ' ' + $rootScope.user.LastName;
        $scope.scopeUserName = $scope.user.FirstName + ' ' + $scope.user.LastName;
    });
})();
