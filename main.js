function trans() {
  const strData = $("#address").val();
  let strTemp = strData.split("/d/");
  let strResult = strTemp[1].split("/view?usp=sharing");
  let result = "https://drive.google.com/uc?export=view&id=" + strResult[0];
  console.log(result);
  $(".result textarea").text(result);
  // $(".transferBg").css("background","url("+result+")")
  // $(".transferBg").css("background-repeat","no-repeat")
  // $(".transferBg").css("background-position","center")
  $(".transferBg").css({
    background: "url(" + result + ")",
    "background-repeat": "no-repeat",
    "background-position": "center"
  });
}

let transfer = document.getElementById("transfer");

transfer.addEventListener("click", trans);
