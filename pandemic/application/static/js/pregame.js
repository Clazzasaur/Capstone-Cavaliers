    var socket;
    $(document).ready(function () {

    socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function () {
        socket.emit('getMessages');
    });
    $("#message_button").click(function(){
        // get the value from the movement box
        var value = $('#message_input').val();
        // clear the field
        $('#message_input').val("");
        // submit that value
        socket.emit('sendMessage', {message:value})

    });

    socket.on('messageReceived', function (data) {
        $('#log').val($('#log').val() + data.msg + '\n');
    });

     socket.on('playerJoined', function (data) {
        $('#log').val($('#log').val() + data.msg + '\n');
    });

    socket.on('gameStarted', function (data) {

        location.href ="/game";

    });


    $("#gameStarter").click(function(){
        socket.emit('startGame')

    });
    });
