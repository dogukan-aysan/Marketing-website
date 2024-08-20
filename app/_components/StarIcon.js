function StarIcon({ size, hierarchy, disabled }) {
  let className4Container = "flex justify-center items-center";
  let className4Icon = "";

  if (size === "2xl") {
    className4Container = className4Container + " w-6 h-6";
    className4Icon = className4Icon + " w-5 h-5";
  } else {
    className4Container = className4Container + " w-5 h-5";
    className4Icon = className4Icon + " w-4 h-4";
  }
  if (disabled) {
    className4Icon = className4Icon + " fill-neutral-400";
  } else {
    if (hierarchy === "primary" || hierarchy === "destructive") {
      className4Icon = className4Icon + " fill-white";
    } else if (hierarchy === "secondary") {
      className4Icon = className4Icon + " fill-neutral-900";
    } else if (hierarchy === "tertiary") {
      className4Icon = className4Icon + " fill-indigo-700";
    } else if (hierarchy === "link-color") {
      className4Icon = className4Icon + " fill-indigo-700 hover:fill-indigo-800";
    } else if (hierarchy === "link-gray") {
      className4Icon = className4Icon + " fill-neutral-600 hover:fill-neutral-900";
    }
  }
  return (
    <div className={className4Container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className4Icon}>
        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
      </svg>
    </div>
  );
}

export default StarIcon;
