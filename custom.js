var flag = 0;
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["<em class='fa fa-arrow-left'></em>", "<em class='fa fa-arrow-right'></em>"],
    })
    $(".logobox").hover(function () {
        if (flag == 0) {
            myfunc();

        }
        // $(".postersec").css("display", "block");
    })
    $(".crossclass").click(function () {
        $(".postersec").css("display", "none");
    })
    function myfunc() {
        flag = 1;
        $(".postersec").css("display", "block");
    }
    // $("navcont nav ul li").hover(function () {
    //     $(".hover").css("display", "block");
    // })

    $(".logobox i").click(function () {
        $("#uppernav").toggle();
    })

})

