import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    showEdit(){
      this.set('editFormShow', true);
    },

    update(question){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        detail: this.get('detail')
      };
      this.set('editFormShow', false);
      this.sendAction('update', question, params);
    }
  }
});
