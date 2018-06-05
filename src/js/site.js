(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        function updateLink(className, url){
            var link = $(className);
            link.removeClass('hidden');
            link.attr('href', url);
        }

        if (typeof github_url !== 'undefined') { updateLink('.social-github', github_url); }
        if (typeof linkedin_url !== 'undefined') { updateLink('.social-linkedin', linkedin_url); }
        if (typeof google_plus_url !== 'undefined') { updateLink('.social-google-plus', google_plus_url); }
    });

})(jQuery);
