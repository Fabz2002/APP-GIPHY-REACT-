function Button({ btn }) {
  return (
    <button
      type="button"
      className="bg-red text-white block mx-auto px-2 py-1 rounded-md mt-4 hover:text-blue-dark transition all 0.3s ease-in-out"
    >
      {btn}
    </button>
  );
}

export default Button;
