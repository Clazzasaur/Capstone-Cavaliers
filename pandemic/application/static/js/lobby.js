var socket;
$(document).ready(function () {
    socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('connect', function () {
        socket.emit('checkRoomPrivacy');
        // This will be called automatically
        // it will allow the user to request all the public rooms
});
    socket.on('publicLobbies', function (data) {
    console.log(data);
    var i = 0;
    for (lobbyName in data.lobbies){
        console.log(data.lobbies[0]);
        $('#roomlog').val($('#roomlog').val() + data.lobbies[i] + '\n');
        i = i + 1;
    }
    i = 0;
    });
});
