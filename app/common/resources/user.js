module.exports = function(Restangular) {
  var User = Restangular.all('user');

  User.register = function (user) {
    return Restangular.one('register').post('', user);
  }

  User.resetPassword = function (email) {
    return Restangular.one('resetPassword').post('', email);
  };

  User.verify = function(token) {
    return Restangular.one('verify').post('', token);
  };

  return User;
}