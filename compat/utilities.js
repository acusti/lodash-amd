/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/escape', './utilities/identity', './utilities/mixin', './utilities/noConflict', './utilities/noop', './utilities/parseInt', './utilities/random', './utilities/result', './utilities/template', './utilities/templateSettings', './utilities/times', './utilities/unescape', './utilities/uniqueId'], function(escape, identity, mixin, noConflict, noop, parseInt, random, result, template, templateSettings, times, unescape, uniqueId) {

  return {
    'escape': escape,
    'identity': identity,
    'mixin': mixin,
    'noConflict': noConflict,
    'noop': noop,
    'parseInt': parseInt,
    'random': random,
    'result': result,
    'template': template,
    'templateSettings': templateSettings,
    'times': times,
    'unescape': unescape,
    'uniqueId': uniqueId
  };
});
