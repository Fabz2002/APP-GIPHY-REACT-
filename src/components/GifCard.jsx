function GifCard({ data }) {
  return (
    <div className="flex flex-col items-center content-center mt-3">
      <h2 className="text-black font-thin" key={data.id}>
        {data.title}
      </h2>
      <img src={data.url} alt={data.title} />
    </div>
  );
}

export default GifCard;
