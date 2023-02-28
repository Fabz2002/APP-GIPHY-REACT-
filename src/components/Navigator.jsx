import Button from "./Button";

function Navigator({ btn = "", title = "" }) {
  return (
    <nav className="bg-khaki rounded-lg mx-auto p-4   max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40">
      <h1 className=" inline-block font-bold text-white my-2 text-2xl">
        {title}
      </h1>
      <Button btn={btn} />
    </nav>
  );
}

export default Navigator;
