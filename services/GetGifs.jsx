const apiKey = import.meta.env.VITE_API_KEY;
async function GetGifs({ keyword }) {
  const apiGif = `${
    import.meta.env.VITE_API_KEY
  }/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  const res = await fetch(apiGif);
  const response = await res.json();
  const { data = [] } = response;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
}

export default GetGifs;
