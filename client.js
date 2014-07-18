var Tracker = (function () {
  var exports = {};
  exports.pushEvent = function()
  {
    var man_tracker_vars = {};

    var elements = document.getElementsByTagName('meta');
    for (var i = 0; i < elements.length; i++){
      var match = elements[i].name.match(/mt_(.*)/);
      if (match != null) {
        var name = match[1];
        var content = elements[i].content;
        man_tracker_vars[name] = content;
      }
    }
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/events";
    var params = "man_tracker="+JSON.stringify(man_tracker_vars);
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);
  };
  return exports;
}());
