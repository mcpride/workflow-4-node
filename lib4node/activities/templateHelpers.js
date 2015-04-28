"use strict";
var _ = require('lodash');
var Reflection = require('backpack-node').system.Reflection;
var maxDepth = 10;
var templateHelpers = {
  isTemplate: function(obj) {
    var activityCount = 0;
    templateHelpers.visitActivities(obj, function() {
      activityCount++;
    });
    return activityCount > 0;
  },
  visitActivities: function(obj, f) {
    if (!_.isPlainObject(obj) && !_.isArray(obj))
      return ;
    Reflection.visitObject(obj, function(subObj, parent, pkey) {
      if (_.isString(subObj)) {
        var str = subObj.trim();
        if (str.length > 1 && str[0] === '#') {
          var markup = {expression: {expr: str.substr(1)}};
          f(markup, parent, pkey);
          return false;
        }
      } else if (_.isPlainObject(subObj)) {
        var keys = _.keys(subObj);
        if (keys.length === 1) {
          var key = keys[0];
          if (key[0] === '@' && key.length > 1) {
            var markup = {};
            markup[key.substr(1)] = subObj[key];
            f(markup, parent, pkey);
            return false;
          }
        } else if (keys.length == 2) {
          var key1 = keys[0];
          var key2 = keys[1];
          if (key1 === '@require' && key2[0] === '@' && key2.length > 1) {
            var markup = {};
            markup[key1] = subObj[key1];
            markup[key2.substr(1)] = subObj[key2];
            f(markup, parent, pkey);
            return false;
          } else if (key2 === '@require' && key1[0] === '@' && key1.length > 1) {
            var markup = {};
            markup[key2] = subObj[key2];
            markup[key1.substr(1)] = subObj[key1];
            f(markup, parent, pkey);
            return false;
          }
        }
      }
      return true;
    }, maxDepth);
  }
};
module.exports = templateHelpers;
//# sourceMappingURL=data:application/json;base64,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ZXMvdGVtcGxhdGVIZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IkM6L0dJVC9tb25nby1jcnVuY2gvZGVwcy93b3JrZmxvdy00LW5vZGUvbGliLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBSZWZsZWN0aW9uID0gcmVxdWlyZSgnYmFja3BhY2stbm9kZScpLnN5c3RlbS5SZWZsZWN0aW9uO1xyXG5cclxudmFyIG1heERlcHRoID0gMTA7XHJcblxyXG52YXIgdGVtcGxhdGVIZWxwZXJzID0ge1xyXG5cclxuICAgIGlzVGVtcGxhdGU6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB2YXIgYWN0aXZpdHlDb3VudCA9IDA7XHJcbiAgICAgICAgdGVtcGxhdGVIZWxwZXJzLnZpc2l0QWN0aXZpdGllcyhvYmosIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWN0aXZpdHlDb3VudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhY3Rpdml0eUNvdW50ID4gMDtcclxuICAgIH0sXHJcblxyXG4gICAgdmlzaXRBY3Rpdml0aWVzOiBmdW5jdGlvbiAob2JqLCBmKSB7XHJcbiAgICAgICAgaWYgKCFfLmlzUGxhaW5PYmplY3Qob2JqKSAmJiAhXy5pc0FycmF5KG9iaikpIHJldHVybjtcclxuICAgICAgICBSZWZsZWN0aW9uLnZpc2l0T2JqZWN0KG9iaiwgZnVuY3Rpb24gKHN1Yk9iaiwgcGFyZW50LCBwa2V5KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyhzdWJPYmopKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gc3ViT2JqLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gMSAmJiBzdHJbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJrdXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHN0ci5zdWJzdHIoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZihtYXJrdXAsIHBhcmVudCwgcGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdChzdWJPYmopKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBfLmtleXMoc3ViT2JqKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1swXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5WzBdID09PSAnQCcgJiYga2V5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmt1cCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXBba2V5LnN1YnN0cigxKV0gPSBzdWJPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZihtYXJrdXAsIHBhcmVudCwgcGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXlzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleTEgPSBrZXlzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkyID0ga2V5c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5MSA9PT0gJ0ByZXF1aXJlJyAmJiBrZXkyWzBdID09PSAnQCcgJiYga2V5Mi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrdXAgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya3VwW2tleTFdID0gc3ViT2JqW2tleTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXBba2V5Mi5zdWJzdHIoMSldID0gc3ViT2JqW2tleTJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmKG1hcmt1cCwgcGFyZW50LCBwa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkyID09PSAnQHJlcXVpcmUnICYmIGtleTFbMF0gPT09ICdAJyAmJiBrZXkxLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmt1cCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXBba2V5Ml0gPSBzdWJPYmpba2V5Ml07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmt1cFtrZXkxLnN1YnN0cigxKV0gPSBzdWJPYmpba2V5MV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYobWFya3VwLCBwYXJlbnQsIHBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sIG1heERlcHRoKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVIZWxwZXJzOyJdfQ==
