export interface ButtonParams {
  label: string;
  onClick: () => void | Promise<void>;
}

function Button({ label, onClick }: ButtonParams) {
  return (
    <>
      <button
        onClick={onClick}
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-xl shadow-md transition"
      >
        {label}
      </button>
    </>
  );
}

export default Button;
