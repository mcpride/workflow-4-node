"use strict";
var Activity = require("./activity");
var util = require("util");
var _ = require("lodash");
var specStrings = require("../common/specStrings");
var errors = require("../common/errors");
function BeginMethod() {
  Activity.call(this);
  this.canCreateInstance = false;
  this.methodName = "";
  this.instanceIdPath = "";
}
util.inherits(BeginMethod, Activity);
BeginMethod.prototype.run = function(callContext, args) {
  var methodName = this.get("methodName");
  if (_(methodName).isString()) {
    var mn = methodName.trim();
    if (mn) {
      callContext.createBookmark(specStrings.hosting.createBeginMethodBMName(mn), "_methodInvoked");
      callContext.idle();
      return ;
    }
  }
  this.fail(new errors.ValidationError("BeginMethod activity methodName property's value must be a valid identifier."));
};
BeginMethod.prototype._methodInvoked = function(callContext, reason, result) {
  callContext.end(reason, result);
};
module.exports = BeginMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZ2luTWV0aG9kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsQUFBSSxFQUFBLENBQUEsUUFBTyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsWUFBVyxDQUFDLENBQUM7QUFDcEMsQUFBSSxFQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFDMUIsQUFBSSxFQUFBLENBQUEsQ0FBQSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDekIsQUFBSSxFQUFBLENBQUEsV0FBVSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsdUJBQXNCLENBQUMsQ0FBQztBQUNsRCxBQUFJLEVBQUEsQ0FBQSxNQUFLLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxrQkFBaUIsQ0FBQyxDQUFDO0FBRXhDLE9BQVMsWUFBVSxDQUFFLEFBQUQsQ0FBRztBQUNuQixTQUFPLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQ25CLEtBQUcsa0JBQWtCLEVBQUksTUFBSSxDQUFDO0FBQzlCLEtBQUcsV0FBVyxFQUFJLEdBQUMsQ0FBQztBQUNwQixLQUFHLGVBQWUsRUFBSSxHQUFDLENBQUM7QUFDNUI7QUFBQSxBQUVBLEdBQUcsU0FBUyxBQUFDLENBQUMsV0FBVSxDQUFHLFNBQU8sQ0FBQyxDQUFDO0FBRXBDLFVBQVUsVUFBVSxJQUFJLEVBQUksVUFBVSxXQUFVLENBQUcsQ0FBQSxJQUFHLENBQUc7QUFDckQsQUFBSSxJQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxZQUFXLENBQUMsQ0FBQztBQUN2QyxLQUFJLENBQUEsQUFBQyxDQUFDLFVBQVMsQ0FBQyxTQUFTLEFBQUMsRUFBQyxDQUFHO0FBQzFCLEFBQUksTUFBQSxDQUFBLEVBQUMsRUFBSSxDQUFBLFVBQVMsS0FBSyxBQUFDLEVBQUMsQ0FBQztBQUMxQixPQUFJLEVBQUMsQ0FBRztBQUNKLGdCQUFVLGVBQWUsQUFBQyxDQUFDLFdBQVUsUUFBUSx3QkFBd0IsQUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFHLGlCQUFlLENBQUMsQ0FBQztBQUM3RixnQkFBVSxLQUFLLEFBQUMsRUFBQyxDQUFDO0FBQ2xCLGFBQU07SUFDVjtBQUFBLEVBQ0o7QUFBQSxBQUNBLEtBQUcsS0FBSyxBQUFDLENBQUMsR0FBSSxDQUFBLE1BQUssZ0JBQWdCLEFBQUMsQ0FBQyw4RUFBNkUsQ0FBQyxDQUFDLENBQUM7QUFDekgsQ0FBQTtBQUVBLFVBQVUsVUFBVSxlQUFlLEVBQUksVUFBVSxXQUFVLENBQUcsQ0FBQSxNQUFLLENBQUcsQ0FBQSxNQUFLLENBQUc7QUFDMUUsWUFBVSxJQUFJLEFBQUMsQ0FBQyxNQUFLLENBQUcsT0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQTtBQUVBLEtBQUssUUFBUSxFQUFJLFlBQVUsQ0FBQztBQUFBIiwiZmlsZSI6ImFjdGl2aXRpZXMvYmVnaW5NZXRob2QuanMiLCJzb3VyY2VSb290IjoiQzovR0lUL21vbmdvLWNydW5jaC9kZXBzL3dvcmtmbG93LTQtbm9kZS9saWIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFjdGl2aXR5ID0gcmVxdWlyZShcIi4vYWN0aXZpdHlcIik7XHJcbnZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XHJcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxudmFyIHNwZWNTdHJpbmdzID0gcmVxdWlyZShcIi4uL2NvbW1vbi9zcGVjU3RyaW5nc1wiKTtcclxudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuLi9jb21tb24vZXJyb3JzXCIpO1xyXG5cclxuZnVuY3Rpb24gQmVnaW5NZXRob2QoKSB7XHJcbiAgICBBY3Rpdml0eS5jYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5jYW5DcmVhdGVJbnN0YW5jZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXRob2ROYW1lID0gXCJcIjtcclxuICAgIHRoaXMuaW5zdGFuY2VJZFBhdGggPSBcIlwiO1xyXG59XHJcblxyXG51dGlsLmluaGVyaXRzKEJlZ2luTWV0aG9kLCBBY3Rpdml0eSk7XHJcblxyXG5CZWdpbk1ldGhvZC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKGNhbGxDb250ZXh0LCBhcmdzKSB7XHJcbiAgICB2YXIgbWV0aG9kTmFtZSA9IHRoaXMuZ2V0KFwibWV0aG9kTmFtZVwiKTtcclxuICAgIGlmIChfKG1ldGhvZE5hbWUpLmlzU3RyaW5nKCkpIHtcclxuICAgICAgICB2YXIgbW4gPSBtZXRob2ROYW1lLnRyaW0oKTtcclxuICAgICAgICBpZiAobW4pIHtcclxuICAgICAgICAgICAgY2FsbENvbnRleHQuY3JlYXRlQm9va21hcmsoc3BlY1N0cmluZ3MuaG9zdGluZy5jcmVhdGVCZWdpbk1ldGhvZEJNTmFtZShtbiksIFwiX21ldGhvZEludm9rZWRcIik7XHJcbiAgICAgICAgICAgIGNhbGxDb250ZXh0LmlkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZmFpbChuZXcgZXJyb3JzLlZhbGlkYXRpb25FcnJvcihcIkJlZ2luTWV0aG9kIGFjdGl2aXR5IG1ldGhvZE5hbWUgcHJvcGVydHkncyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllci5cIikpO1xyXG59XHJcblxyXG5CZWdpbk1ldGhvZC5wcm90b3R5cGUuX21ldGhvZEludm9rZWQgPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIHJlYXNvbiwgcmVzdWx0KSB7XHJcbiAgICBjYWxsQ29udGV4dC5lbmQocmVhc29uLCByZXN1bHQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJlZ2luTWV0aG9kOyJdfQ==
