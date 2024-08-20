function Badge({ size, color, children }) {
  let colorUtilities = "";
  switch (color) {
    case "neutral": {
      colorUtilities = "bg-gray-50 text-neutral-600 border border-neutral-200";
      break;
    }
    case "error": {
      colorUtilities = "bg-red-50 text-red-600 border border-red-200";
      break;
    }
    case "warning": {
      colorUtilities = "bg-amber-50 text-amber-700 border border-amber-200";
      break;
    }
    case "success": {
      colorUtilities = "bg-green-50 text-green-700 border border-green-200";
      break;
    }
    case "brand": {
      colorUtilities = "bg-indigo-50 text-indigo-700 border border-indigo-200";
      break;
    }
  }
  return (
    <div
      className={`w-fit h-fit cursor-pointer rounded-full ${
        size === "sm" ? "px-1.5 py-0.5 text-xs" : size === "md" ? "px-2 py-0.5 text-sm" : "px-2.5 py-1 text-sm"
      } ${colorUtilities}`}
    >
      {children}
    </div>
  );
}

export default Badge;
