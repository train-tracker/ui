/**
 * The Session service
 */
module.exports = function($http, API_ROOT) {
  var Session = function($http, API_ROOT) {
    this._properties = {}
    this._url = API_ROOT+'/session'
  }

  /**
   * Fetches the session and sets it on itself
   * @return {void}
   */
  Session.prototype.fetch = function () {
    $http.get(this._url).then(function (session) {
      this.properties = session
    })
  }

  /**
   * Gets a single property
   * @param  {string} property
   * @return {mixed}
   */
  Session.prototype.get = function(property) {
    return this._properties[property]
  }

  return new Session($http, API_ROOT)
}