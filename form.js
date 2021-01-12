var failGrade = 60;
var highGrade = 90;
var grade;
var isPassing;

$(document).ready(function () {
    grade = Math.round(Number(sessionStorage.getItem("grade")));
    isPassing = grade > failGrade;
    loadHeader();
    $("#submit-btn").on("click", submitForm);
});

function loadHeader() {
    $("#form-container h1").html("סיימת את לומדת CRM בציון <b class='grade'>" + grade + "</b>")
    if (isPassing) {
        $(".grade").css("color", "green");
        $("#form-container h1").append("<br>כל הכבוד!");
        $("#form-container h2").html("כל כך התרשמנו שאנחנו חייבים את החתימה שלך:");
        if (grade > highGrade) {
            $("#form-container h2").html("אתם הכי אלופים שראיתי בחיים, אפשר את הפרטים שלכם להעביר לרמטכ\"ל?");
        }
    } else {
        $(".grade").css("color", "red");
        $("#form-container h1").append("<br>לצערנו זה לא ציון עובר :(");
        $("#form-container h2").html("אבל תשאירו פרטים, שנדע להגיד שלום בפעם הבאה");
    }
}

/*
            submitForm
            ==========
            description:
            * if form is valid, save user information in session storage
            * redirect to main page
            ===================================================================================================================================================
            programmer: Shira Shmuely
            date: 18/10/2020
*/
function submitForm() {
    if (validateForm()) {
        // sessionStorage.setItem("fname", $("#fname").val());
        // sessionStorage.setItem("lname", $("#lname").val());
        // sessionStorage.setItem("pnumber", $("#pnumber").val());
        $("#form-container").css({
            "font-size": "3vh",
            "line-height": "5vh",
            "padding": "10% 10%",
            "text-align": "center",
            "font-weight": "bold"
        });

        if (isPassing) {
            $("#form-container").css("color", "green");
            $("#form-container").html($("#fname").val() + ", " + $("#pnumber").val() + " עברת את לומדת CRM בציון " + grade + " </br> היה כיף להכיר! <img src='media/success.png'/>");
        } else {
            $("#form-container").css("color", "red");
            $("#form-container").html($("#fname").val() + ", " + $("#pnumber").val() + " ציונך בלומדת CRM הינו " + grade + ", </br> זהו ציון נכשל :( <img src='media/fail.png'/>");
        }

        $("#form-container img").css({
            "height": "50%",
            "position": "absolute",
            "bottom": "0",
            "right": "0"
        });
    }
}

/*
            validateForm
            ============
            description:
            * if a form item is empty, return false
            * if personal number isn't possible length, return false
            * return true
            ========================================================
            programmer: Shira Shmuely
            date: 18/10/2020
*/
function validateForm() {
    var isFormValid = true;
    $(".form-field").each(function () {
        if ($(this).val() === "" || $(this).val() === null) {
            alert('יש למלא את כל הפרטים בטופס');
            isFormValid = false;
            return false;
        }
        if ($(this).attr("id") === "pnumber" && this.value.length < 5 || $(this).attr("id") === "pnumber" && this.value < 0 || $(this).attr("id") === "pnumber" && this.value.length > 10) {
            alert('מספר אישי לא תקין');
            isFormValid = false;
            return false;
        }
    });
    return isFormValid;
}