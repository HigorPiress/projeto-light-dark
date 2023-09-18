function toggleMode() {
  const html = document.documentElement // pegando o html
  html.classList.toggle("light") // troca das classes

  // OUTRO METÓDO
  // if(html.classList.contains('light')) { // a lista de class contém
  //     html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // TROCA DE IMAGEM

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituit imagem
  if (html.classList.contains("light")) {
    // se tiver light mode. adiocionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Perfil light mode')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Perfil-dark-mode")
  }
  
  

 
}