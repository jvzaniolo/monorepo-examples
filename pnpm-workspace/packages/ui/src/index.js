import React from "react";

export function Component() {
  console.log();
  // ^ this should be a lint warning

  return (
    <div>
      <h1>Hello World</h1>
      <img src="" alt="" />
      {/* ^ this should not be a lint warning */}
    </div>
  );
}
