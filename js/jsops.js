/* jsops v0.1 | (c) Julian Dobmann | julian.dobmann@mailbox.org | MIT License |
 * https://github.com/juffel/jsops */
var jsops = (function() {
  var self = {};
  
  ////////////////
  // url submodule
  self.url = {};
  self.url.query = {};
  self.url.query.get = (function(key) {
    return getFromKeyValueString(key, getUrlQuery());
  });
  self.url.query.set = (function(key, value) {
    return window.location.search = setInKeyValueString(key, getUrlQuery(), value);
  });
  self.url.hash = {};
  self.url.hash.get = (function(key) {
    return getFromKeyValueString(key, getUrlHash());
  });
  self.url.hash.set = (function(key, value) {
    return window.location.hash = setInKeyValueString(key, getUrlHash(), value);
  });
  // end url submodule
  ////////////////////
  
  ////////////////////
  // private functions
  function getUrlQuery() {
    return window.location.search.slice(1);
  }
  // returns the window.location.hash **without** the leading #-char
  function getUrlHash() {
    return window.location.hash.slice(1);
  }
  // accepts a  key and a string of key-value pairs of form "bla=blobb&bli=blu"
  // searches for a tuple with the passed key on the left-hand side and returns
  // the right-hand side if found, null else
  function getFromKeyValueString(key, kvstring) {
    var kvpairs = kvstring.split('&');
    for (var i in kvpairs) {
      var pair = kvpairs[i].split('=');
      var k = pair[0];
      if (k == key) {
        return pair[1];
      }
    }
    return null;
  }
  // accepts a  key and a string of key-value pairs of form "bla=blobb&bli=blu"
  // and a value
  // searches for a key-value pair with the passed key and returns a string with
  // where the previous value is replaced with the given value or if the key was
  // new to the string, with a new key-value pair appended
  function setInKeyValueString(key, kvstring, value) {
    var kvpairs = kvstring.split('&');
    var kvobj = {};
    for (var i in kvpairs) {
      var pair = kvpairs[i].split('=');
      var k = pair[0];
      var v = pair[1];
      if (k != undefined && k != null && k != "" && pair.length == 2) {
        kvobj[k] = v;
      }
    }
    // dont add if value == undefined || value == null
    if (value != null && value != undefined) {
      kvobj[key] = value;
    }
    else {
      delete kvobj[key];
    }
    var ret = [];
    for (var i in kvobj) {
      ret.push(i + "=" + kvobj[i]);
    }
    return ret.join('&');
  }
  // end private functions
  ////////////////////
  
  return self;
})();
