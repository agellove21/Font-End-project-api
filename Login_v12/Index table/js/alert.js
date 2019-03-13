document.getElementsByTagName('body')[0].onmousedown = function(e) {
    if(e.which) {
        alert("Make by Huỳnh Minh Nhật"); // original click
    }
}
document.getElementsByTagName('body')[0].onmousedown();