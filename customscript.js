jQuery(document).ready(function($){

    if( $(window).width() < 768 ){
        var readmore_opts = {
            moreLink: '<a class="read-more" href="#">Read more</a>',
            lessLink: '<a class="close" href="#">Close</a>'
        };
        
        $('.location-desc').readmore(readmore_opts);
        $('.story-desc').readmore(readmore_opts);
        $('.plan-desc').readmore(readmore_opts);
        $('.highlight-content').readmore(readmore_opts);


    }

});