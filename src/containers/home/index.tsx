"use client";

import { useEffect } from "react";
import debounce from "debounce";

import Search from "@/src/components/search";
import { AnimeCard, AnimeCardSkeleton } from "@/src/components/anime-card";

import { IAnime } from "@/src/interfaces/anime";
import { useAnimeSearch } from "./request";

const debouncedSearch = debounce(
  (query: string, searchAnime: (query: string) => void) => {
    searchAnime(query);
  },
  300,
);

const Animes = ({
  items,
  isLoading,
}: {
  items: IAnime[];
  isLoading: boolean;
}) => {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <AnimeCardSkeleton key={index} />
          ))
        : items?.map((item) => <AnimeCard key={item.mal_id} {...item} />)}
    </div>
  );
};

const Home = () => {
  const {
    data,
    mutate: searchAnime,
    isPending: searchIsPending,
  } = useAnimeSearch();

  const handleOnSearch = (query: string) => {
    debouncedSearch(query, searchAnime);
  };

  const items = data?.data || [];

  useEffect(() => {
    debouncedSearch("", searchAnime);
  }, []);

  return (
    <div className=" w-full max-w-7xl mx-auto">
      <Search onSearch={handleOnSearch} isLoading={searchIsPending} />
      <Animes items={items} isLoading={searchIsPending} />
    </div>
  );
};

export default Home;
