'use strict';

describe("Unit: Testing todoController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working todoController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('todoController', {
            $scope: scope
        });

        expect(scope.name).toEqual('todo');
    }));

});
