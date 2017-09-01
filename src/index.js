import $ from 'jquery'

export default class Promise {
  constructor(resolver) {
    const deferred = $.Deferred()
    this.promise = deferred.promise()
    resolver(
      (...args) => deferred.resolve(...args),
      (...args) => deferred.reject(...args)
    )
  }

  then(success, fail) {
    return this.promise.then(success, fail)
  }

  catch(fail) {
    return this.promise.fail(fail)
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
