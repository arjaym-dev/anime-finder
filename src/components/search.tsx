"use client";

import { useState } from "react";
import classNames from "classnames";

interface ISearchProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const Search = ({ onSearch, isLoading = false }: ISearchProps) => {
  const [value, setValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setValue(query);

    onSearch(query);
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="relative w-full md:max-w-100">
        <input
          value={value}
          onChange={handleSearch}
          name="search"
          type="text"
          placeholder="Search for anime..."
          className={classNames(
            "text-xs md:text-sm border border-gray-500/20 rounded-md py-2 px-2.5 w-full focus:border-sky-500 focus:outline focus:outline-sky-500 transition",
            {
              "opacity-50 cursor-not-allowed pr-10": isLoading,
            },
          )}
          disabled={isLoading}
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sky-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
