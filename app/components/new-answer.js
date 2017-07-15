import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswerForm: false,

  actions: {
    showNewForm(){
      this.set('showNewAnswerForm', true);
    },

    save1(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('showNewAnswerForm', false);
      this.sendAction('save1', params);
    }
  }
});
