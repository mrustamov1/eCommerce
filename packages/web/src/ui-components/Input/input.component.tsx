import { useEffect, useState } from "react";

export function Input({
  label,
  type,
  showErrorText = true,
  error,
  onValueChange,
  inputRef,
  validation,
  ...otherProps
}: {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  showErrorText?: boolean;
  error?: string;
  onValueChange?: (value: string) => void;
  validation?: {
    condition: (value: string) => boolean;
    errorMessage: string;
  };
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<
    React.HTMLInputTypeAttribute | undefined
  >();

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <div>
      {/* --------------------------------------------------------------------------- */}
      {/* LABEL */}
      {/* --------------------------------------------------------------------------- */}

      {label && (
        <span
          className=""
          style={otherProps.disabled ? { color: "#A0ACB0" } : {}}
        >
          {label}
        </span>
      )}

      <div
        style={otherProps.disabled ? { background: "#F7F7F7" } : {}}
        className="relative w-full"
      >
        {/* --------------------------------------------------------------------------- */}
        {/* INPUT */}
        {/* --------------------------------------------------------------------------- */}

        <input
          className="min-w-[478px] w-full px-3 py-3 rounded-[10px] border-2 border-[#000]"
          ref={inputRef}
          type={inputType}
          onChange={
            onValueChange
              ? (e) => {
                  onValueChange(e.target.value);
                }
              : undefined
          }
         
          {...otherProps}
        />

        {/* --------------------------------------------------------------------------- */}
        {/* EYE FOR PASSWORD */}
        {/* --------------------------------------------------------------------------- */}

        {type === "password" && (
          <>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {!showPassword ? (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setInputType("text");
                  }}
                  className="far fa-eye-slash"
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setInputType("password");
                  }}
                  className="far fa-eye"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* ERROR */}
      {/* --------------------------------------------------------------------------- */}

      {error && showErrorText && (
        <span className="text-[#e12e2e] text-[11px] not-italic font-normal leading-[1.5rem] mt-2">
          {error}
        </span>
      )}
    </div>
  );
}
