import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  librarySystem: Ember.inject.service(),
  title: DS.attr('string'),
  year: DS.attr('number'),
  author: DS.belongsTo('author'),
  isAvailable: function () {
    return this.get('librarySystem').isAvailable(this.id);
  }
});
