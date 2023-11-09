function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

//  como faria se não existe a função pré-pronta:

//  if (html.classList.contains('light')){
//    html.classList.remove('light')
//  }
//  else{
//    html.classList.add('light')
//  }
}