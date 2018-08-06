var submitForm = function (value) {
    document.getElementById("nn-form-value").value = value;
    document.getElementById("nn-form").submit();
};

var resetData = function (value) {
    document.getElementById("reset-data").value = 1;
    document.getElementById("nn-form").submit();
};
