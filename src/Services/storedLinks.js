export function getLinksSave(key){
  const myLinks = localStorage.getItem(key)

  let linksSave = JSON.parse(myLinks) || []

  return linksSave
}

export function saveLink(key, newLink){
  let linksStored = getLinksSave(key);

  const hasLink = linksStored.some(link => link.id === newLink.id)

  if(hasLink){
    alert('Este link já está salvo!')
    return
  }

  linksStored.push(newLink)
  localStorage.setItem(key, JSON.stringify(linksStored))
  alert('Link salvo com sucesso!')
}

export function deleteLink(links, id){
  let myLinks = links.filter(link => link.id !== id)

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  alert('Link excluído!')

  return myLinks
}