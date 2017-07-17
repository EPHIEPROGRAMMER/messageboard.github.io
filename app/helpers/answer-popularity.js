import Ember from 'ember';

export function answerPopularity(params) {
  var qNa = params[0];

  if(qNa.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<i class="fa fa-star-o that-question-is-gonna-be-a-star" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(answerPopularity);
