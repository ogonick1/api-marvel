const characterMapping = (char) => {
  return {
    id: char.id,
    name: char?.name,
    description: char.description ? `${char.description.slice(0, 220)}...` : 'not found description on the server',
    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics: char.comics.items
  }
};

export default characterMapping;