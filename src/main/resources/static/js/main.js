$( document ).ready(function() {

    $('table').DataTable({
        serverSide: true,
        ajax: '/dropbox/browse',
        columns: [
            { title: "유형", data: "folder", render: function (data, type, row) {
                return data ? '폴더' : '파일';
            } },
            { title: "이름", data: "name" },
            { title: "아이디", data: "id" },
            { title: "경로", data: "path" }
        ]
    });

});

function init() {
    addEventListener();
}

function addEventListener() {
    excuteProcess();
    changeFileSize();
}

function excuteProcess() {
    $('.excute-btn').on('click', function() {
        var inputExcuteType = $(this).attr('data-type');
        var excuteTypes = inputExcuteType.split(",");
        for(var i = 0 ; i < excuteTypes.length ; i++) {
            console.log(excuteTypes[i]);
        }

        $('.excute-btn').attr('disabled', true);

        var requestData = new Object();
        requestData.localPath = "working-draft.txt";
        requestData.remotePath = "/test.txt";
        var data = JSON.stringify(requestData);
        console.log("data : " + data);

        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "/dropbox/upload",
            type: "POST",
            contentType: false,
            processData: false,
            cache: false,
            data: data,
            dataType: 'json',
            success: function(result){
                $('.excute-btn').attr('disabled', false);
                console.log('success');
            }
        });
    });
}

function changeFileSize() {
    var defaultLogFileSize = 10;
    $('#inputFileSize').on('input', function() {
        var inputFileSize = $('#inputFileSize').val();
        if(inputFileSize == "" || inputFileSize <= 0) {
            $('.totalFileSize').text(defaultLogFileSize);
        } else {
            $('.totalFileSize').text(inputFileSize);
        }
    })
}