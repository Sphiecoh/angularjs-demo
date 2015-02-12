'use strict'
app.controller('searchController',function(searchService,$scope)
{
   
    
    $scope.test = 'test';
    $scope.results = {};
    $scope.search = function(term){
     searchService.search(term).success(function(responce)
                                        {
                                            $scope.results = responce.results;
                                        }
                                       ).error(function(error){});
    };
});