"use strict";
var StrMap = require("backpack-node").collections.StrMap;
var specStrings = require("../common/specStrings");
var is = require("../common/is");
function InstIdPaths() {
  this._map = new StrMap();
}
InstIdPaths.prototype.add = function(workflowName, methodName, instanceIdPath) {
  var key = specStrings.hosting.doubleKeys(workflowName, methodName);
  var inner = this._map.get(key);
  if (!inner) {
    inner = new StrMap();
    this._map.add(key, inner);
  }
  var count = inner.get(instanceIdPath);
  if (is.undefined(count)) {
    inner.add(instanceIdPath, 1);
  } else {
    inner.set(instanceIdPath, count + 1);
  }
};
InstIdPaths.prototype.remove = function(workflowName, methodName, instanceIdPath) {
  var key = specStrings.hosting.doubleKeys(workflowName, methodName);
  var inner = this._map.get(key);
  if (inner) {
    var count = inner.get(instanceIdPath);
    if (is.defined(count)) {
      if (count === 1) {
        this._map.remove(key);
      } else {
        inner.set(instanceIdPath, count - 1);
      }
    }
  }
  return false;
};
InstIdPaths.prototype.forEach = function(workflowName, methodName, f) {
  var key = specStrings.hosting.doubleKeys(workflowName, methodName);
  var inner = this._map.get(key);
  if (inner)
    inner.forEachKey(f);
};
module.exports = InstIdPaths;
//# sourceMappingURL=data:application/json;base64,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LENBQUM7QUFDOUIsS0FBSSxLQUFJO0FBQUcsUUFBSSxXQUFXLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUFBLEFBQ2xDLENBQUE7QUFFQSxLQUFLLFFBQVEsRUFBSSxZQUFVLENBQUM7QUFDNUIiLCJmaWxlIjoiaG9zdGluZy9pbnN0SWRQYXRocy5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvbW9uZ28tY3J1bmNoL2RlcHMvd29ya2Zsb3ctNC1ub2RlL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RyTWFwID0gcmVxdWlyZShcImJhY2twYWNrLW5vZGVcIikuY29sbGVjdGlvbnMuU3RyTWFwO1xyXG52YXIgc3BlY1N0cmluZ3MgPSByZXF1aXJlKFwiLi4vY29tbW9uL3NwZWNTdHJpbmdzXCIpO1xyXG52YXIgaXMgPSByZXF1aXJlKFwiLi4vY29tbW9uL2lzXCIpO1xyXG5cclxuZnVuY3Rpb24gSW5zdElkUGF0aHMoKSB7XHJcbiAgICB0aGlzLl9tYXAgPSBuZXcgU3RyTWFwKCk7XHJcbn1cclxuXHJcbkluc3RJZFBhdGhzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBtZXRob2ROYW1lLCBpbnN0YW5jZUlkUGF0aCkge1xyXG4gICAgdmFyIGtleSA9IHNwZWNTdHJpbmdzLmhvc3RpbmcuZG91YmxlS2V5cyh3b3JrZmxvd05hbWUsIG1ldGhvZE5hbWUpO1xyXG4gICAgdmFyIGlubmVyID0gdGhpcy5fbWFwLmdldChrZXkpO1xyXG4gICAgaWYgKCFpbm5lcikge1xyXG4gICAgICAgIGlubmVyID0gbmV3IFN0ck1hcCgpO1xyXG4gICAgICAgIHRoaXMuX21hcC5hZGQoa2V5LCBpbm5lcik7XHJcbiAgICB9XHJcbiAgICB2YXIgY291bnQgPSBpbm5lci5nZXQoaW5zdGFuY2VJZFBhdGgpO1xyXG4gICAgaWYgKGlzLnVuZGVmaW5lZChjb3VudCkpIHtcclxuICAgICAgICBpbm5lci5hZGQoaW5zdGFuY2VJZFBhdGgsIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaW5uZXIuc2V0KGluc3RhbmNlSWRQYXRoLCBjb3VudCArIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbnN0SWRQYXRocy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHdvcmtmbG93TmFtZSwgbWV0aG9kTmFtZSwgaW5zdGFuY2VJZFBhdGgpIHtcclxuICAgIHZhciBrZXkgPSBzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBtZXRob2ROYW1lKTtcclxuICAgIHZhciBpbm5lciA9IHRoaXMuX21hcC5nZXQoa2V5KTtcclxuICAgIGlmIChpbm5lcikge1xyXG4gICAgICAgIHZhciBjb3VudCA9IGlubmVyLmdldChpbnN0YW5jZUlkUGF0aCk7XHJcbiAgICAgICAgaWYgKGlzLmRlZmluZWQoY291bnQpKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwLnJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5uZXIuc2V0KGluc3RhbmNlSWRQYXRoLCBjb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5JbnN0SWRQYXRocy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uICh3b3JrZmxvd05hbWUsIG1ldGhvZE5hbWUsIGYpIHtcclxuICAgIHZhciBrZXkgPSBzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBtZXRob2ROYW1lKTtcclxuICAgIHZhciBpbm5lciA9IHRoaXMuX21hcC5nZXQoa2V5KTtcclxuICAgIGlmIChpbm5lcikgaW5uZXIuZm9yRWFjaEtleShmKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbnN0SWRQYXRocztcclxuIl19
