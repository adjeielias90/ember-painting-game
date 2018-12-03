import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateCellColor(cell){
      if (this.isEditable){
        this.onCellChange(cell);
      }
    },
    mouseMove(cell, e){ //left-click
      if (e.buttons === 1){
        this.send('updateCellColor', cell);
      }
    }
  }
});
