import Ember from 'ember';

export default Ember.Service.extend({
  isAvaiable () {
    // Mocked with a 50/50 chance.
    return Ember.RSVP.resolve(Math.random() >= 0.5);
  }
});
