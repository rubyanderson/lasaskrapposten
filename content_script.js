(function($) {
    var Ab = function() {
        var t = this;

        t.init = function() {
            setTimeout(t.removeOverlay, 2000);
        }

        t.removeOverlay = function() {
            $('.abThemeGradientPage').parent().fadeOut();
            $('div[data-reactid="60"]').css('filter', 'none');
        }

        t.init();
    }

    $(document).ready(function() {
        new Ab;
    });

})(jQuery);


