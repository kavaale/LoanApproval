$(function (){

    var valRules = {
        salary: {
            required: true,
            max: 999999999999,
            min: 0
        },
        credit: {
            required: true,
            max: 300,
            min: 850
        },
        jobTime: {
            required: true,
            min: 0,
            max: 1080
        }
    };

    var valMessages = {
        salary: {
            required: "Must input salary",
            max: "Please enter your real salary",
            min: "Please enter your real salary"
        },
        credit: {
            required: "Must input credit score",
            max: "Please enter your real credit score",
            min: "Please enter your real credit score"
        },
        jobTime: {
            required: "Must input time on job",
            min: "Please enter your actual time at the job in months",
            max: "Please enter your actual time at the job in months"
        }
    };

    function loanApproval() {

        var salary = $("#salary").val();
        var credit = $("#credit").val();
        var jobTime = $("#jobTime").val();

        if ((salary >= 40000 && credit >= 600) || (salary >= 40000 && jobTime > 12) || (credit >= 600 && jobTime > 12)) {
            $("#output").text("Approved");
        } else {
            $("#output").text("Not approved");
        }

    }

    $("form").validate({
        rules: valRules,
        messages: valMessages,
        submitHandler: loanApproval
    });
});