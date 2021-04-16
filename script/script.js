$(function(){

/*	$("button").click(function(){

		var memChk = ["test1", "guest1", "youyh"]; // 가입되어 있는 아이디
		var output = "";
		var inputID = $("#chkID").val().trim();	// 회원가입시 사용자가 입력한 ID
		var chkTF = true;

		$.each(memChk, function(i, v) {

			if(inputID == v) {
				// if의 조건식이 true라면
				output = "사용중인 아이디입니다.";
				chkTF = false;
			} else {
				output = "사용가능한 아이디입니다.";
				chkTF = true;
			}

		});

		$("#output").html(output);

	});*/


	/*/////////////////////////////////////////////////////////////*/

	$("button").click(function () {

        var memChk = ["test1", "guest1", "youyh"];
		var output = "";
        var inputID = $("#chkID").val().trim();
		var chkTF = true;

        $.each(memChk, function (i, v) {

            if (inputID == v) {
                output = "사용중인 ID입니다.";
                chkTF = false;
            }

        });

        if (chkTF) {
            output = "사용가능한 ID입니다.";
        }

		$("#output").html(output);
//        $("#output").text(output);

    });



});






