import Ember from "ember";

export default Ember.ArrayController.extend({

  queryParams: ['query'],
  query: null,

  results: function () {
    return this.store.find('post', {query: this.get('query')});
  }.property('query')

});
