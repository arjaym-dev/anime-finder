"use client";

import classNames from "classnames";
import QueryClientProviderWrapper from "./react-query";

import useAnimeState from "../zustand/anime";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAnimeState();

  return (
    <QueryClientProviderWrapper>
      <div
        className={classNames("px-5", { "dark:bg-gray-700": theme === "dark" })}
      >
        {children}
      </div>
    </QueryClientProviderWrapper>
  );
};

export default LayoutWrapper;
