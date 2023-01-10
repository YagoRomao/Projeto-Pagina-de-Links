function toggleMode () {
  const html = document.documentElement

  //  if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //  }  else {
  //    html.classList.add('light')
  //  }

  html.classList.toggle("light")

  //caso queira trocar imagem também precisa 1º
    //pegar a tag img
      //const img = document.querySelector("#profile img")

    //substituir a imagem
      //if(html.classList.contains('light')){

    //se tiver light mode, adicionar a imagem light
      //img.setAttribute('src', './assets/avatar-light.png')} else {

    // se tiver sem light mode, manter a imagem normal
      //img.setAttribute('src', '.assets/avatar-dark.png')
    //}


  //se trocar a imagem troque também o alt que foi onde descrevemos o conteudo da imagem
    //pegar a tag img
      //const img = document.querySelector("#profile img")

    //substituir o texto
      //if(html.classList.contains('light')){

    //se tiver light mode, adicionar o texto da imagem light
      //img.setAttribute('alt', 'Foto....')} else {

    // se tiver sem light mode, manter o texto da imagem normal
      //img.setAttribute('alt', 'Foto...')
      //}
}