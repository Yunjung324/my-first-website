var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;  //색상이 변경되는 것이기 때문에 매개변수를 여기에 사용
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}

var Body = {
    setColor: function (color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
         //target은 위에서 선언한대로
        self.value = 'day';   //this는 document.querySelector('#night_day') 를 의미
        Links.setColor('powderblue');
    }
    else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = 'night';
        Links.setColor('blue');
    }
}