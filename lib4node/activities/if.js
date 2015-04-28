"use strict";
var Activity = require('./activity');
var util = require('util');
function If() {
  Activity.call(this);
  this.condition = null;
  this.thenBody = null;
  this.elseBody = null;
}
util.inherits(If, Activity);
If.prototype.run = function(callContext, args) {
  var condition = this.get("condition");
  if (condition) {
    callContext.schedule(condition, "_conditionGot");
  } else {
    callContext.complete();
  }
};
If.prototype._conditionGot = function(callContext, reason, result) {
  if (reason === Activity.states.complete) {
    if (result) {
      var thenBody = this.get("thenBody");
      if (thenBody) {
        callContext.schedule(thenBody, "_bodyFinished");
        return ;
      }
    } else {
      var elseBody = this.get("elseBody");
      if (elseBody) {
        callContext.schedule(elseBody, "_bodyFinished");
        return ;
      }
    }
    callContext.complete();
  } else {
    callContext.end(reason, result);
  }
};
If.prototype._bodyFinished = function(callContext, reason, result) {
  callContext.end(reason, result);
};
module.exports = If;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsQUFBSSxFQUFBLENBQUEsUUFBTyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsWUFBVyxDQUFDLENBQUM7QUFDcEMsQUFBSSxFQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFFMUIsT0FBUyxHQUFDLENBQUUsQUFBRCxDQUFHO0FBQ1YsU0FBTyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUVuQixLQUFHLFVBQVUsRUFBSSxLQUFHLENBQUM7QUFDckIsS0FBRyxTQUFTLEVBQUksS0FBRyxDQUFDO0FBQ3BCLEtBQUcsU0FBUyxFQUFJLEtBQUcsQ0FBQztBQUN4QjtBQUFBLEFBRUEsR0FBRyxTQUFTLEFBQUMsQ0FBQyxFQUFDLENBQUcsU0FBTyxDQUFDLENBQUM7QUFFM0IsQ0FBQyxVQUFVLElBQUksRUFBSSxVQUFVLFdBQVUsQ0FBRyxDQUFBLElBQUcsQ0FBRztBQUM1QyxBQUFJLElBQUEsQ0FBQSxTQUFRLEVBQUksQ0FBQSxJQUFHLElBQUksQUFBQyxDQUFDLFdBQVUsQ0FBQyxDQUFDO0FBQ3JDLEtBQUksU0FBUSxDQUFHO0FBQ1gsY0FBVSxTQUFTLEFBQUMsQ0FBQyxTQUFRLENBQUcsZ0JBQWMsQ0FBQyxDQUFDO0VBQ3BELEtBQ0s7QUFDRCxjQUFVLFNBQVMsQUFBQyxFQUFDLENBQUM7RUFDMUI7QUFBQSxBQUNKLENBQUE7QUFFQSxDQUFDLFVBQVUsY0FBYyxFQUFJLFVBQVUsV0FBVSxDQUFHLENBQUEsTUFBSyxDQUFHLENBQUEsTUFBSyxDQUFHO0FBQ2hFLEtBQUksTUFBSyxJQUFNLENBQUEsUUFBTyxPQUFPLFNBQVMsQ0FBRztBQUNyQyxPQUFJLE1BQUssQ0FBRztBQUNSLEFBQUksUUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLElBQUcsSUFBSSxBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFDbkMsU0FBSSxRQUFPLENBQUc7QUFDVixrQkFBVSxTQUFTLEFBQUMsQ0FBQyxRQUFPLENBQUcsZ0JBQWMsQ0FBQyxDQUFDO0FBQy9DLGVBQU07TUFDVjtBQUFBLElBQ0osS0FDSztBQUNELEFBQUksUUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLElBQUcsSUFBSSxBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFDbkMsU0FBSSxRQUFPLENBQUc7QUFDVixrQkFBVSxTQUFTLEFBQUMsQ0FBQyxRQUFPLENBQUcsZ0JBQWMsQ0FBQyxDQUFDO0FBQy9DLGVBQU07TUFDVjtBQUFBLElBQ0o7QUFBQSxBQUNBLGNBQVUsU0FBUyxBQUFDLEVBQUMsQ0FBQztFQUMxQixLQUNLO0FBQ0QsY0FBVSxJQUFJLEFBQUMsQ0FBQyxNQUFLLENBQUcsT0FBSyxDQUFDLENBQUM7RUFDbkM7QUFBQSxBQUNKLENBQUE7QUFFQSxDQUFDLFVBQVUsY0FBYyxFQUFJLFVBQVUsV0FBVSxDQUFHLENBQUEsTUFBSyxDQUFHLENBQUEsTUFBSyxDQUFHO0FBQ2hFLFlBQVUsSUFBSSxBQUFDLENBQUMsTUFBSyxDQUFHLE9BQUssQ0FBQyxDQUFDO0FBQ25DLENBQUE7QUFFQSxLQUFLLFFBQVEsRUFBSSxHQUFDLENBQUM7QUFDbkIiLCJmaWxlIjoiYWN0aXZpdGllcy9pZi5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvbW9uZ28tY3J1bmNoL2RlcHMvd29ya2Zsb3ctNC1ub2RlL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0aXZpdHkgPSByZXF1aXJlKCcuL2FjdGl2aXR5Jyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xyXG5cclxuZnVuY3Rpb24gSWYoKSB7XHJcbiAgICBBY3Rpdml0eS5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY29uZGl0aW9uID0gbnVsbDtcclxuICAgIHRoaXMudGhlbkJvZHkgPSBudWxsO1xyXG4gICAgdGhpcy5lbHNlQm9keSA9IG51bGw7XHJcbn1cclxuXHJcbnV0aWwuaW5oZXJpdHMoSWYsIEFjdGl2aXR5KTtcclxuXHJcbklmLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIGFyZ3MpIHtcclxuICAgIHZhciBjb25kaXRpb24gPSB0aGlzLmdldChcImNvbmRpdGlvblwiKTtcclxuICAgIGlmIChjb25kaXRpb24pIHtcclxuICAgICAgICBjYWxsQ29udGV4dC5zY2hlZHVsZShjb25kaXRpb24sIFwiX2NvbmRpdGlvbkdvdFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhbGxDb250ZXh0LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbklmLnByb3RvdHlwZS5fY29uZGl0aW9uR290ID0gZnVuY3Rpb24gKGNhbGxDb250ZXh0LCByZWFzb24sIHJlc3VsdCkge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gQWN0aXZpdHkuc3RhdGVzLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB2YXIgdGhlbkJvZHkgPSB0aGlzLmdldChcInRoZW5Cb2R5XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhlbkJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxDb250ZXh0LnNjaGVkdWxlKHRoZW5Cb2R5LCBcIl9ib2R5RmluaXNoZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBlbHNlQm9keSA9IHRoaXMuZ2V0KFwiZWxzZUJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmIChlbHNlQm9keSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbENvbnRleHQuc2NoZWR1bGUoZWxzZUJvZHksIFwiX2JvZHlGaW5pc2hlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsQ29udGV4dC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2FsbENvbnRleHQuZW5kKHJlYXNvbiwgcmVzdWx0KTtcclxuICAgIH1cclxufVxyXG5cclxuSWYucHJvdG90eXBlLl9ib2R5RmluaXNoZWQgPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIHJlYXNvbiwgcmVzdWx0KSB7XHJcbiAgICBjYWxsQ29udGV4dC5lbmQocmVhc29uLCByZXN1bHQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IElmO1xyXG4iXX0=
