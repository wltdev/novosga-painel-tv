$( document ).ready(function() {   
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    var dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var secondProperty = ' ';
    
    function secondCount() {
        if (secondProperty == ' ') {
            secondProperty =  ':';
        } else {
            secondProperty = ' ';
        }
    }

    function checkTime() {
        var date = new Date();
        var sufix = '';
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);
        var day = date.getDate();
        var month = monthNames[date.getMonth()];
        var weekday = dayNames[date.getDay()];
        if (day > 3 && day < 21) sufix = 'th';
        switch (day % 10) {
            case 1:
            sufix = "st";
            case 2:
            sufix = "nd";
            case 3:
            sufix = "rd";
            default:
            sufix = "th";
        }
        document.getElementById('time').innerHTML = " <span class='hour'>" + hours + ':' + minutes + "</span><br/><span class='date'>" + weekday + ', ' + day + ' de ' + month + '.';
    }

    setInterval(function() {
        checkTime()
        // secondCount()
    }, 1000)
});