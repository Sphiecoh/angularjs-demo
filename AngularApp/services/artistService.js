app.service('searchService',function($http){
    var urlBase = 'https://itunes.apple.com/search';
 
this.search = function(searchTerm)
 {
    return $http.jsonp(urlBase,{
     params:
        {
            'callback':'JSON_CALLBACK',
            'term': searchTerm
           
     }
    }); 
 };
    
});