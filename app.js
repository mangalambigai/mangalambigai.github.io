angular.module('projectsApp', [])
.service('projects', function() {
    this.getProjects = function() {
        return $.get('data.json');
    };
})
.controller('ProjectsCtrl', ['$scope', 'projects', function($scope, projects) {
    var vm = this;

    projects.getProjects().then(function(data) {
        $scope.$apply(function() {
            vm.projects = data;
        });
    });
}]);