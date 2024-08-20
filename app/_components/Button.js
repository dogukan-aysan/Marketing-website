import StarIcon from "./StarIcon";

function getSizeUtilities(size, content, hierarchy) {
  let result = "";

  if (size === "sm") {
    result = `${
      hierarchy.includes("link")
        ? " p-0 gap-1 text-sm font-medium"
        : content === "icon-only"
        ? " p-2"
        : " px-3 py-2 gap-1 text-sm font-medium"
    }`;
  } else if (size === "md") {
    result = `${
      hierarchy.includes("link")
        ? " p-0 gap-1 text-sm font-medium"
        : content === "icon-only"
        ? " p-2.5"
        : " px-3.5 py-2.5 gap-1 text-sm font-medium"
    }`;
  } else if (size === "lg") {
    result = `${
      hierarchy.includes("link")
        ? " p-0 gap-1.5 text-base font-medium"
        : content === "icon-only"
        ? " p-3"
        : " px-4 py-2.5 gap-1.5 text-base font-medium"
    }`;
  } else if (size === "xl") {
    result = `${
      hierarchy.includes("link")
        ? " p-0 gap-1.5 text-base font-medium"
        : content === "icon-only"
        ? " p-3.5"
        : " px-5 py-3 gap-1.5 text-base font-medium"
    }`;
  } else if (size === "2xl") {
    result = `${
      hierarchy.includes("link")
        ? " p-0 gap-2.5 text-lg font-medium"
        : content === "icon-only"
        ? " p-4"
        : " px-6 py-4 gap-2.5 text-lg font-medium"
    }`;
  }

  return result;
}
function getHierarchyUtilities(hierarchy, disabled) {
  let result = "";

  if (disabled) {
    result = " text-neutral-400 cursor-not-allowed";
    if (["primary", "secondary"].includes(hierarchy)) {
      result += " bg-neutral-100";
    }
    return result;
  }

  if (hierarchy === "primary") {
    result = " bg-indigo-700 text-white shadow hover:bg-indigo-800 focus:shadow-focus focus:outline-none focus:bg-indigo-800";
  } else if (hierarchy === "secondary") {
    result =
      " bg-white text-neutral-900 outline-[0.5px] shadow-secondary hover:bg-zinc-50 hover:text-neutral-950 focus:shadow-focus focus:bg-zinc-50 focus:text-neutral-950 focus:outline-none";
  } else if (hierarchy === "tertiary") {
    result = " bg-white text-indigo-700 hover:bg-zinc-50 focus:outline-none focus:bg-zinc-50 focus:shadow-focus";
  } else if (hierarchy === "destructive") {
    result = " bg-red-600 text-white hover:bg-red-700 focus:shadow-focus-red focus:outline-none focus:bg-red-700";
  } else if (hierarchy === "link-color") {
    result = " text-indigo-700 hover:text-indigo-800 focus:outline-none focus:text-indigo-800 focus:shadow-focus";
  } else if (hierarchy === "link-gray") {
    result = " text-neutral-600 hover:text-neutral-900 focus:outline-none focus:text-neutral-900 focus:shadow-focus";
  }

  return result;
}
function generateContent(children, content, size, hierarchy, disabled) {
  let result = "";

  if (content === "label-only") {
    result = (
      <>
        <span className="px-0.5">{children}</span>
      </>
    );
  } else if (content === "left-icon") {
    result = (
      <>
        <StarIcon size={size} hierarchy={hierarchy} disabled={disabled} />
        <span className="px-0.5">{children}</span>
      </>
    );
  } else if (content === "right-icon") {
    result = (
      <>
        <span className="px-0.5">{children}</span>
        <StarIcon size={size} hierarchy={hierarchy} disabled={disabled} />
      </>
    );
  } else if (content === "both-icon") {
    result = (
      <>
        <StarIcon size={size} hierarchy={hierarchy} disabled={disabled} />
        <span className="px-0.5">{children}</span>
        <StarIcon size={size} hierarchy={hierarchy} disabled={disabled} />
      </>
    );
  } else if (content === "icon-only") {
    result = (
      <>
        <StarIcon size={size} hierarchy={hierarchy} disabled={disabled} />
      </>
    );
  }
  return result;
}
function Button({ children, content, size, hierarchy, handleClick, display = "inline", disabled = false }) {
  let baseClass = "rounded flex justify-center items-center cursor-pointer h-fit shrink-0";
  baseClass += ` ${display === "block" ? "w-full" : "w-fit"}`;
  return (
    <button
      className={baseClass + getSizeUtilities(size, content, hierarchy) + getHierarchyUtilities(hierarchy, disabled)}
      onClick={handleClick}
    >
      {generateContent(children, content, size, hierarchy, disabled)}
    </button>
  );
}

export default Button;
