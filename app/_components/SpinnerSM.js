function SpinnerSM() {
  return (
    <div className={"relative aspect-square rounded-full border-white  animate-spin h-5 border-4"}>
      <div className="absolute aspect-square rounded-full border-transparent border-t-indigo-300 border-4 -top-1 -left-1 h-5"></div>
    </div>
  );
}

export default SpinnerSM;
