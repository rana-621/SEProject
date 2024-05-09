// دالة لتنفيذ عملية signup
function signUp() {
    var emailInput = document.querySelector('.form input[type="text"]');
    var email = emailInput.value;

    if (validateEmail(email)) {
        alert("You have signed up successfully!");
    } else {
        alert("Please enter a valid email address!");
    }
}

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.querySelector('.form button.normal');
    signUpButton.addEventListener('click', signUp);
});
// دالة للانتقال إلى الصفحة الجديدة عند النقر على الزر "More"
// دالة للانتقال إلى الصفحة الجديدة عند النقر على الزر "more"
function goToAnotherPage() {
    // قم بتحديد عنوان URL للصفحة الجديدة
    var newPageURL = "more.html";
    // قم بتوجيه المستخدم إلى الصفحة الجديدة
    window.location.href = newPageURL;
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    var moreButton = document.querySelector('.more'); // الحصول على زر "more"
    // إضافة استماع لحدث النقر (click) إلى الزر "more"
    moreButton.addEventListener('click', goToAnotherPage);
});








