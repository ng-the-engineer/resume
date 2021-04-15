const copyToClipboard = () => {  
  const copyText = document.getElementById("cvUrl");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);
  showSnackbar();
}