import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    savePost: function(post){
      var title = this.get('title');
      post.set('title', title);
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }

});