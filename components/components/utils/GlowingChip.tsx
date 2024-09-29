import React from "react";

export const GlowingChip = ({ children }: { children: any }) => {
  return (
    <span className="relative z-10 mb-4 inline-block border border-blue-700 bg-blue-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0 md:text-sm">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
  );
};
