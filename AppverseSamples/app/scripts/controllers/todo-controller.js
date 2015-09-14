/*
 Copyright (c) 2015 GFT Appverse, S.L., Sociedad Unipersonal.
 This Source Code Form is subject to the terms of the Appverse Public License
 Version 2.0 (“APL v2.0”). If a copy of the APL was not distributed with this
 file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the conditions of the AppVerse Public License v2.0
 are met.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

/*
 * Controller todoController for todo.
 * Pay attention to injection of dependencies (factories, entities and Angular objects).
 */
angular.module('App.Controllers')

        .controller('todoController', ['$scope', '$log', 'Restangular', '$state',
                function ($scope, $log, Restangular, $state) {
                        $scope.name = 'Todo';
                        $scope.activeItem = {};
                        
                        var currentItem = {};

                        Restangular.all("taskData").getList().then(function (data) {
                                $scope.TaskList = data;
                                console.log($scope.TaskList);
                        })

                        $scope.saveItem = function () {
                                console.log('Saving...');

                                if (!angular.equals({}, $scope.activeItem) && $scope.activeItem != null) {
                                        if ($scope.activeItem.id) {
                                               //$scope.activeItem.save();
                                        } else {
                                                addNewItem();
                                        }

                                        $scope.activeItem = null;

                                        $state.reload();
                                }
                        }

                        function addNewItem() {
                                // Use Underscore library.
                                var newId = _.max($scope.TaskList, function (task) {
                                        return task.id;
                                });

                                $scope.activeItem.id = newId.id + 1;
                                $scope.TaskList.push($scope.activeItem);
                        }
            
                        $scope.updateItem = function (item) {
                                console.log('Updating...');
                                
                                currentItem = angular.copy(item);
                                $scope.activeItem = item;
                        }

                        $scope.deleteItem = function (item) {
                                console.log('Removing...');

                                item.remove().then(function () {
                                        var index = $scope.TaskList.indexOf(item);
                                        if (index > -1) {
                                                $scope.TaskList.splice(index, 1);
                                        }

                                        $state.reload();
                                });
                        }

                        $scope.cancel = function () {
                                console.log('Cancel...');

                                if (!angular.equals({}, currentItem) && currentItem != null) {
                                        var oldValueIndex = $scope.TaskList.indexOf($scope.activeItem);
                                        $scope.TaskList[oldValueIndex] = currentItem;

                                        $scope.activeItem = null;
                                        currentItem = null;
                                        $state.reload();
                                }

                        }
                }
        ]);
