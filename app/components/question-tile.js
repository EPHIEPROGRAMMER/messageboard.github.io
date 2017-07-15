import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  answerCount: Ember.computed('question.answers', function() {
    var answerAmount = this.get('question.answers.length');
    return answerAmount;
  }),

  actions: {
    addToFavs(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
