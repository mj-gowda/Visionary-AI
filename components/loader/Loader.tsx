import Image from "next/image";
import React from "react";

/**
 * Loading component which is displayed when the user is waiting for something.
 * @returns (JSX.Element): loader component
 */
export const Loader: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/logo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        The Visionary is working his magic...
      </p>
    </div>
  );
};
