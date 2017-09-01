import $ from 'jquery'

export default class Promise {
  constructor(resolver) {
    let deferred = $.Deferred()
    this._promise = deferred.promise()
    resolver(
      (...args) => deferred.resolve(...args),
      (...args) => deferred.reject(...args)
    )
  }
  then(success, fail) {
    return this._promise.then(success, fail)
  }
  catch(fail) {
    return this._promise.fail(fail)
  }
  static all(...promises) {
    return $.when(...promises)
  }
  static resolve(...args) {
    return new Promise(resolve => resolve(...args))
  }
  static reject(...args) {
    return new Promise(() => {}, reject => reject(...args))
  }
}
