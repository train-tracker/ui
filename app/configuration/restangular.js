
module.exports = function (RestangularProvider, API_ROOT) {
    // Setup restangular
    RestangularProvider.setBaseUrl(API_ROOT);
    
    /**
     * 
     */
    RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
        var newResponse;
        if(operation === 'getList') {
            newResponse = response.data;
            newResponse.meta = response.meta;
        } else {
            newResponse = response.data;
        }
        
        return newResponse;
    })
}