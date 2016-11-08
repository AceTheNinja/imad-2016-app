$('.loader svg')
    .velocity(
        {
            rotateZ:"360"
        },
        {
            duration:5000
        }
    );

$(".loader div")
    .css({display:'none'})
    .velocity(
        "fadeIn",
        {
           duration:2000,
            delay:500
        }
    );

$(".loader")
    .velocity(
        "fadeOut",
        {
            delay:7000,
            duration:1000,
            display:"none"
        }
    );

$("#sideNav")