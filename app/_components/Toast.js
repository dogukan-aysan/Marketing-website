function Toast({ state, message }) {
  return (
    <div
      className={`${
        state === "Success" ? "bg-green-50" : "bg-red-50"
      } rounded-full flex gap-3 items-center absolute top-10 md:max-[1439px]:top-5 left-0 right-0 mx-auto w-fit pl-1 pr-2.5 py-1 text-sm font-medium ${
        state === "Success" && "text-green-700"
      }`}
    >
      <span className={`rounded-full shadow bg-white py-0.5 px-2.5 ${state === "Error" && "text-red-800"}`}>{state}</span>
      <p className={`${state === "Error" && "text-red-600"}`}>{message}</p>
    </div>
  );
}

export default Toast;
