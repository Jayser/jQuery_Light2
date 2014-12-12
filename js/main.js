;(function(g, d) {

    // find one selector for id
    console.log( $('#new-todo') );
    $('#header').hide();

    // find multi selectors for id
    console.log( $('#footer, #main'));
    $('#footer, #main').hide();
   
   // is DOM Ready
    $(function(){
        console.log( 'DOM is READY' );
    });

    // global method
    console.log( $.trim('    lorem      ') );

}(window, document));