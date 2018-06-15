$("#get_button").click( function(){
  var selectVal = $("#select_test").val();
  alert(selectVal);
});

$("#set_button").click( function(){
  // value値が2のデータを選択
  $("#select_test").val("2");
});

$("#get_button").click( function(){
  var selectVal = $("#select_test option:selected").text();
  alert(selectVal);
});