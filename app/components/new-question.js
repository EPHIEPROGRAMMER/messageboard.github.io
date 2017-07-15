import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {

    newFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        detail: this.get('detail')
      };
      this.set('content', '');
      this.set('author', '');
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
