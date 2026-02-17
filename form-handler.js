document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("feedback-form");
    var status = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            sendAjax(form.method, form.action, data, success, error);
        });
    }

    function success() {
        if(form) form.reset();
        if(status) {
            status.style.display = "block";
            status.innerHTML = "<p class='text-green-600 font-bold'><i class='fa-solid fa-check-circle'></i> ขอบคุณสำหรับความคิดเห็นครับ!</p>";
        }
        // Redirect after 3 seconds (optional)
        setTimeout(() => {
             window.location.href = "index.html";
        }, 3000);
    }

    function error() {
        if(status) {
            status.style.display = "block";
            status.innerHTML = "<p class='text-red-600 font-bold'>เกิดข้อผิดพลาดในการส่งข้อมูล โปรดลองใหม่อีกครั้ง</p>";
        }
    }

    function sendAjax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
});