

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
        image.attr('height', heightpixel + '%');
        image.attr('width', percentage + '%');

        link.attr('target', openInNewTab ? '_blank' : '');
        link.attr('href',linkInput);
    });
});








