const apiKey = "m9fjZ1dEn5gtC2KuZ0IPo66YjmYezf2t";
async function GetRandomGif() {
  const apiRandomGif = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;

  const res = await fetch(apiRandomGif);
  const response = await res.json();
  const { data } = response;
  const { title, id, images } = data;
  const { url } = images.downsized_medium;
  const gifs = { title, id, url };
  return gifs;
}

export default GetRandomGif;
