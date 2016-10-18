import Ember from 'ember';

export default Ember.Service.extend({
  isAvailable () {
    // Returns a promise.
    // Mocked to return with a 50/50 chance of being available.
    return Ember.RSVP.resolve(Math.random() >= 0.5);
  }
});
