import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  librarySystem: Ember.inject.service(),
  title: DS.attr('string'),
  year: DS.attr('number'),
  author: DS.belongsTo('author'),
  isAvailablePromise: Ember.computed(function () {
    const promise = this.get('librarySystem').isAvailable(this.id);
    return DS.PromiseObject.create({promise});
  })
});
