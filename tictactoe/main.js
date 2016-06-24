document.addEventListener('DOMContentLoaded', function(){
  var tiles = document.querySelectorAll('.tiles');
  for (i = 0; i < tiles.length; i++) {
    console.log(tiles[i]);
      this.addEventListener('click', function() {
         //this.style.backgroundColor = 'red';
         console.log(tiles[i]);
          // this.addEventListener('click', function() {
          //   this.style.backgroundColor = 'blue';
        }
        .bind(this));
    // });
  }
});
