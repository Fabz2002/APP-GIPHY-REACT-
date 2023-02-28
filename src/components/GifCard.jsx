function GifCard({ data }) {
  return (
    <div key={data.id} className="flex flex-col items-center content-center">
      <h2 className="text-black font-thin" key={data.id}>
        {data.title}
      </h2>
      <img src={data.images.original.url} alt={data.title} />
    </div>
  );
}

export default GifCard;
