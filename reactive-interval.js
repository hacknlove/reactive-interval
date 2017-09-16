import { Tracker } from 'meteor/tracker'
export const reactiveInterval = function (miliseconds) {
  if (!Tracker.active) {
    return
  }
  var computation = Tracker.currentComputation
  var interval = setTimeout(function () {
    computation.invalidate()
  }, miliseconds)
  computation.onStop(function () {
    clearTimeout(interval)
  })
}
