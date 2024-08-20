"use client";

function Input({
  value,
  onChange,
  name,
  type = "text",
  label = "",
  placeholder = "",
  iconLeading = null,
  helpIcon = null,
  hintText = "",
  errorMessage = "",
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label !== "" && (
        <label htmlFor={name} className="text-neutral-700 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeading !== null && (
          <div className="w-5 h-5 flex items-center justify-center text-neutral-400 absolute top-2.5 left-3.5">{iconLeading}</div>
        )}
        <input
          className={`w-full pr-3.5 py-[9px] h-10 ${
            iconLeading ? "pl-[42px]" : "pl-3.5"
          } rounded bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-0 ${
            errorMessage === "" ? "focus:shadow-inset-focus" : "focus:shadow-inset-error-focus"
          }`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {helpIcon !== null && (
          <div className="w-4 h-4 flex items-center justify-center text-neutral-400 absolute top-3 right-3.5">
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`${errorMessage ? "fill-red-600" : "fill-neutral-400"}`}
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
              </svg>
            }
          </div>
        )}
      </div>
      {(hintText || errorMessage) && (
        <p className={`text-sm ${errorMessage ? "text-red-600" : "text-neutral-500"}`}>{errorMessage !== "" ? errorMessage : hintText}</p>
      )}
    </div>
  );
}

export default Input;
