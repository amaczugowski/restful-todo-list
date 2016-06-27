'use strict';

var app = angular.module('todoApp');

app.factory('todos', function() {
    var todoData = {};

    todoData.todos = [{done: false, title: "finish project", details: "finish this website that uses angularjs, express, and mongodb"}];

    return todoData;
});