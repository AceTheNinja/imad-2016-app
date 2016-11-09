$('svg')
    .velocity(
        {
            rotateZ:"360"
        },
        {
            duration:5000
        }
    );

$(function(){
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
    });

    $("#endfornow").scroll(function(){
        $(".container-fluid").velocity("slideUp",{
            duration:1000
        })
    })
});

