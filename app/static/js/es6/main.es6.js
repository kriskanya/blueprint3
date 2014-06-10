(function(){
  'use strict';

  $(document).ready(init);

  //as you drag the mouse, the tiles will be painted in real time
  //step 1: select wood
  //step 2: click create room
  //step 3: as user hovers over the boxes, they turn into woodfloor.jpg


  function init(){
    $('body').on('click', '#create-room', selectFloor);
  }

  function selectFloor(){
    var floorType = $('').attr('data-img');

    // $(this).find(':selected').data('id')

//     $('select').change(function(){
//   alert($(this).children('option:selected').data('id'));
// });

    console.log(floorType);
  }






})();
