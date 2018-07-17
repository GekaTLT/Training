document.getElementsByClassName('root')[0].addEventListener('change',function () {
  let str = 'Выбранно:';
  document.querySelectorAll('input[type="checkbox"]').forEach(function (elem) {
    if (elem.checked){
      str += ` ${elem.value}`;
    }
  });
  if (str !== 'Выбранно:'){
    console.log(str);
  }
});
