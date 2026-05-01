import React from "react";

export function Button({ className, variant, children, ...props }) {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors inline-block text-center";
  const variantStyle = variant === "outline" 
    ? "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800" 
    : "bg-blue-600 text-white hover:bg-blue-700";
  
  return (
    <button className={`${baseStyle} ${variantStyle} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
