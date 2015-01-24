module.exports = function(Restangular) {
  var User = Restangular.all('user');

  User.register = function (user) {
    return Restangular.one('register').post('', user);
  }

  User.resetPassword = function () {

  };

  User.verify = function() {

  };

  return User;
}

