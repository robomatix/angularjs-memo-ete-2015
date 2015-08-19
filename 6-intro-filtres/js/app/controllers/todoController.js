angular.module('todo.controllers')
    .controller('TodoController', function ($rootScope, $scope) {
        $scope.todoList = [];

        getTodos();

        function getTodos() {
            // Pour le moment, nous nous limiterons à 10 todos.
            for (var i = 1; i < 11; i++) {
                $scope.todoList.push({
                    id: i,
                    title: 'TodoX ' + i
                });
            }
        }
    });

