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

.controller('todoController', ['$scope','$log', 'Restangular', '$state',
        function ($scope, $log, Restangular, $state) {
            $scope.name = 'Todo';
            
            $scope.activeId = 10;
            $scope.activeDescription = 'A description';
            //$scope.TaskList = [];
            $scope.activeItem = {};
            
            Restangular.all("taskData").getList().then(function(data){
                     $scope.TaskList = data;
                     
                     // ## Log objects
                     
                     // ## SLOW - http://stackoverflow.com/a/19425046
                     // angular.forEach($scope.TaskList, function(key, value){
                        //      $log.log('Task: ' + key);
                     // })
                     
                     // ## FAST
                     // for(var i = 0; i<$scope.TaskList.length; i++){
                        // $log.log('Task: ' + $scope.TaskList[i]);
                     // }
            })
            
            
            
            $scope.saveItem = function(){
                    console.log('Saving...');
                    if($scope.activeItem){
                            console.log($scope.activeItem);
                        $scope.activeItem.save().then(function(){
                                $scope.activeItem = null;
                        },function(){
                                console.log('Cannot be save');
                        });
                    }
            }
            
            // The description doesn't go back to the original value if it's changed in the description box, although it's not been saved
            
            $scope.updateItem = function(item){
                    console.log('Updating...');
                    $scope.activeItem = item;
            }
            
            $scope.deleteItem = function(item){
                    console.log('Removing...');
                    console.log(item);
                    item.remove().then(function(){
                            var index = $scope.TaskList.indexOf(item);
                            if(index > -1){
                                    $scope.TaskList.splice(index, 1);
                            }
                    });
            }
        }
]);
