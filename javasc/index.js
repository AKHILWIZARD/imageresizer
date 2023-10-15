

$(document).ready(function(){
    $('#imageWidth, #imagePercentage,#imageheight,#heightPercentage,#flexCheck,#link').on('input', function (){
        var image = $('#picture');
        var link = $('#newtab');
        
        var widthInPixels = $('#imageWidth').val();
        var percentage = $('#imagePercentage').val();
        var imageheight1 = $('#imageheight').val();
        var heightpixel = $('#heightPercentage').val();
        var openInNewTab = $('#flexCheck').is(':checked');
        var linkInput = $('#link').val();


        image.css('width', widthInPixels + 'px');
        image.css('height', imageheight1 + 'px');
        image.css('height', heightpixel + '%');
        image.css('width', percentage + '%');

        link.attr('target', openInNewTab);
        link.attr('href',linkInput)

    });
});








