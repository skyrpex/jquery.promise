import $ from 'jquery'

class Promise {
  constructor(resolver) {
    this.deferred = $.Deferred();
    resolver(
      (...args) => this.deferred.resolve(...args),
      (...args) => this.deferred.reject(...args)
    );
  }

  then(success, fail) {
    return this.deferred.then(success, fail);
  }

  catch(fail) {
    return this.deferred.fail(fail);
  }

  static all([...promises]) {
    const deferreds = promises.map(promise => {
      const deferred = $.Deferred();
      promise.then(
        (...args) => deferred.resolve(...args),
        (...args) => deferred.reject(...args)
      );
      return deferred;
    });

    return $.when(...deferreds);
  }

  static resolve(...args) {
    return new Promise(resolve => resolve(...args));
  }

  static reject(...args) {
    return new Promise((resolve, reject) => reject(...args));
  }
}

$.Promise = Promise;

export default Promise;
