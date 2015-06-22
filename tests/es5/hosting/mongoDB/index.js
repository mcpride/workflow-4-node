"use strict";
var wf4node = require("../../../../");
var MongoDDPersistence = wf4node.hosting.mongoDB.MongoDDPersistence;
var hostingTestCommon = require("../hostingTestCommon");
var Serializer = require("backpack-node").system.Serializer;
var connStr = process.env.TEST_MONGODB_CONN;
var persistence = connStr ? new MongoDDPersistence({connection: connStr}) : null;
if (persistence) {
  describe("WorkflowHost", function() {
    describe("With MongoDBPersistence", function() {
      it("should run basic hosting example in non-lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: false,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doBasicHostTest(hostOptions).nodeify(done);
      });
      it("should run basic hosting example in lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doBasicHostTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example in non-lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: false,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example in lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example with a serializer", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: new Serializer(),
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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YyxDQUFHLEtBQUc7QUFDcEIsbUJBQVMsQ0FBRyxJQUFJLFdBQVMsQUFBQyxFQUFDO0FBQzNCLHdCQUFjLENBQUcsS0FBRztBQUFBLFFBQ3hCLENBQUM7QUFDRCx3QkFBZ0IsaUJBQWlCLEFBQUMsQ0FBQyxXQUFVLENBQUMsUUFBUSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7TUFDakUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFBQSIsImZpbGUiOiJob3N0aW5nL21vbmdvREIvaW5kZXguanMiLCJzb3VyY2VSb290IjoidGVzdHMvZXM2Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdmNG5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vXCIpO1xyXG52YXIgTW9uZ29ERFBlcnNpc3RlbmNlID0gd2Y0bm9kZS5ob3N0aW5nLm1vbmdvREIuTW9uZ29ERFBlcnNpc3RlbmNlO1xyXG52YXIgaG9zdGluZ1Rlc3RDb21tb24gPSByZXF1aXJlKFwiLi4vaG9zdGluZ1Rlc3RDb21tb25cIik7XHJcbnZhciBTZXJpYWxpemVyID0gcmVxdWlyZShcImJhY2twYWNrLW5vZGVcIikuc3lzdGVtLlNlcmlhbGl6ZXI7XHJcblxyXG52YXIgY29ublN0ciA9IHByb2Nlc3MuZW52LlRFU1RfTU9OR09EQl9DT05OO1xyXG52YXIgcGVyc2lzdGVuY2UgPSBjb25uU3RyID8gbmV3IE1vbmdvRERQZXJzaXN0ZW5jZSh7Y29ubmVjdGlvbjogY29ublN0cn0pIDogbnVsbDtcclxuXHJcbmlmIChwZXJzaXN0ZW5jZSkge1xyXG4gICAgZGVzY3JpYmUoXCJXb3JrZmxvd0hvc3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlc2NyaWJlKFwiV2l0aCBNb25nb0RCUGVyc2lzdGVuY2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdChcInNob3VsZCBydW4gYmFzaWMgaG9zdGluZyBleGFtcGxlIGluIG5vbi1sYXp5IG1vZGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBob3N0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZTogcGVyc2lzdGVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eVBlcnNpc3RlbmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c0xvYWRTdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGhvc3RpbmdUZXN0Q29tbW9uLmRvQmFzaWNIb3N0VGVzdChob3N0T3B0aW9ucykubm9kZWlmeShkb25lKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpdChcInNob3VsZCBydW4gYmFzaWMgaG9zdGluZyBleGFtcGxlIGluIGxhenkgbW9kZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlOiBwZXJzaXN0ZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBhbHdheXNMb2FkU3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBob3N0aW5nVGVzdENvbW1vbi5kb0Jhc2ljSG9zdFRlc3QoaG9zdE9wdGlvbnMpLm5vZGVpZnkoZG9uZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcnVuIGNvcnJlbGF0ZWQgY2FsY3VsYXRvciBleGFtcGxlIGluIG5vbi1sYXp5IG1vZGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBob3N0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZTogcGVyc2lzdGVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eVBlcnNpc3RlbmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c0xvYWRTdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGhvc3RpbmdUZXN0Q29tbW9uLmRvQ2FsY3VsYXRvclRlc3QoaG9zdE9wdGlvbnMpLm5vZGVpZnkoZG9uZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcnVuIGNvcnJlbGF0ZWQgY2FsY3VsYXRvciBleGFtcGxlIGluIGxhenkgbW9kZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlOiBwZXJzaXN0ZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBhbHdheXNMb2FkU3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBob3N0aW5nVGVzdENvbW1vbi5kb0NhbGN1bGF0b3JUZXN0KGhvc3RPcHRpb25zKS5ub2RlaWZ5KGRvbmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJ1biBjb3JyZWxhdGVkIGNhbGN1bGF0b3IgZXhhbXBsZSB3aXRoIGEgc2VyaWFsaXplclwiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlOiBwZXJzaXN0ZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcjogbmV3IFNlcmlhbGl6ZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHdheXNMb2FkU3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBob3N0aW5nVGVzdENvbW1vbi5kb0NhbGN1bGF0b3JUZXN0KGhvc3RPcHRpb25zKS5ub2RlaWZ5KGRvbmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19