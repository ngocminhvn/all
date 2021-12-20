// kết hợp với swalalert
// <link href='https://cdn.jsdelivr.net/npm/sweetalert2@11.3.0/dist/sweetalert2.min.css' rel='stylesheet'/>
// <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.3.0/dist/sweetalert2.min.js'></script>
// <script src='https://cdn.jsdelivr.net/gh/ngocminhvn/all/copy.js' type='text/javascript'></script>
// Ex: <h1 onclick="copy(participle)">Click to copy participle </h1>
function copy(text) {
  document.body.insertAdjacentHTML("beforeend","<div id=\"copy\" contenteditable>"+text+"</div>")
  document.getElementById("copy").focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
  document.getElementById("copy").remove();
  Swal.fire(
  'Good!',
  'Đã sao chép thành công!',
  'success'
)
}
