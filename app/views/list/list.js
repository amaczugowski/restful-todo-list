'use strict';

var app = angular.module('list', ['todoApp']);

app.component('list', {
    templateUrl: 'views/list/list.template.html'
});

app.controller('listController', function ($scope, $window, todos) {
    $scope.todos = todos.todos;

    $scope.newTodo = '';

    $scope.submitNewTodo = function() {
        $scope.todos.push({done: false, title: $scope.newTodo});
        $scope.newTodo = '';
    };
});
