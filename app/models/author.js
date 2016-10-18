import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book'),
  // Have any of their books been published in the last two years.
  hasPublishedRecentlyPromise: Ember.computed(function () {
    const promise = this.get('books').then(books => {
      const currentYear = new Date().getFullYear();
      const years = books.map(b => b.get('year'));
      return years.some(y => y >= currentYear - 2);
    });
    return DS.PromiseObject.create({promise});
  })
});
