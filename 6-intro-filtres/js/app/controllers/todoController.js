angular.module('todo.controllers')
    .controller('TodoController', function ($rootScope, $scope, $filter, todoPriority) {
        $scope.todoList = [];

        $scope.todoPriority = todoPriority;
        $scope.priorityFilter = {};
        $scope.sortOrder = 'id';
        $scope.getPriorityName = getPriorityName;

        getTodos();

        function getTodos() {
            // Pour le moment, nous nous limiterons à 10 todos.
            for (var i = 1; i < 11; i++) {
                $scope.todoList.push({
                    id: i,
                    title: 'TodoX ' + i,
                    priority: $scope.todoPriority.high
                });
            }
        }
        function getPriorityName() {
            switch ($scope.priorityFilter.priority) {
                case $scope.todoPriority.low:
                    return 'Low';
                    break;
                case $scope.todoPriority.medium:
                    return 'Medium';
                    break;
                case $scope.todoPriority.high:
                    return 'High';
                    break;
                default:
                    return 'None';
                    break;
            }
        }
        var oldTodo = $filter('filter')($scope.todoList, function (item) {
            return item.id > 6;
        })
        console.log(JSON.stringify(oldTodo));
    });

