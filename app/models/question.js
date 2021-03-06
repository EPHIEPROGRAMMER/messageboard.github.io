import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  detail: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
