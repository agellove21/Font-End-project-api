var d=new Date();
  var day= d.getDay().toString();
  var month=d.getMonth().toString();
  var year=d.getFullYear().toString();
  document.getElementById("date").innerHTML = d;

$("tr").click(function(e) {
    if (e.target.type == "checkbox") {
        e.stopPropagation();
    } else {
        var $checkbox = $(this).find(':checkbox');
        $checkbox.attr('checked', !$checkbox.attr('checked'));
    }
});
  function thongbao(){
   swal({
    title:"Những sinh viên thực hiện",
     text:"Huỳnh Minh Nhật , Nguyễn Quốc Bảo, Đặng Quốc Bình,Nguyễn Phúc Thịnh",
     icon:"info",
     button:"Xác nhận!"}
    );
  }
    var string = "Huỳnh Minh Nhật - Nguyễn Quốc Bảo - Đặng Quốc Bình - Nguyễn Phúc Thịnh";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    })();
  