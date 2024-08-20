function Spinner() {
  return (
    <div className="relative aspect-square rounded-full border-indigo-700 animate-spin h-16 border-8">
      <div className="absolute aspect-square rounded-full border-transparent border-t-indigo-500 border-8 -top-2 -left-2 h-16"></div>
    </div>
  );
}

export default Spinner;
