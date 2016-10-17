import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book'),
  hasPublishedRecently: function () {
    return this.get('books').then(books => {
      const currentYear = new Date().getFullYear();
      const years = books.map(b => b.get('year'));
      // Are any of their books written in the last two years.
      return years.some(y => (y - 2) >= currentYear);
    });
  }
});
