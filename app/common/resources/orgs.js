module.exports = function(Restangular) {
    var Org = Restangular.all('orgs');

    console.log("Hit: app/common/resources/org.js");
    
    return Org;
}