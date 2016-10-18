import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    this.get('author').hasPublishedRecently().then(result => {
      this.set('hasPublishedRecently', result);
    });
  },
  hasPublishedRecently: false
});
