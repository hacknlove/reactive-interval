```javascript

import { reactiveInterval } from 'meteor/hacknlove:reactive-interval'

Meteor.autorun(function () {
  // ...
  reactiveInterval(1000) // invalidate computation each 1000 miliseconds
  // ...
})

Template.foo.helpers(function () {
  // ...
  reactiveInterval(1000)
  // ...
})

```
