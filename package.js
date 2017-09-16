/* global Package */

Package.describe({
  name: 'hacknlove:reactive-interval',
  version: '0.0.1',
  summary: 'recalculate each interval',
  git: 'https://github.com/hacknlove/reactive-interval',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.5.1')
  api.use('ecmascript', 'client')
  api.mainModule('reactive-interval.js', 'client')
})
