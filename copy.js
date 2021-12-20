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
