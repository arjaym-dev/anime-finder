import Image from "next/image";
import Link from "next/link";

import { IAnime } from "../interfaces/anime";
export const AnimeCard = (props: IAnime) => {
  const { images, title, synopsis, score, episodes, status, url } = props;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200 hover:shadow-xl">
      <div className="relative p-4">
        <div className="flex justify-center w-full">
          <div className="relative w-[150] h-[150]">
            <Image
              fill
              loading="eager"
              src={images.jpg.image_url}
              alt={title}
              className=""
              sizes="auto"
            />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
          ★ {score}
        </div>
      </div>

      <div className="p-4">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="transition-all text-xl underline font-bold text-blue-400 hover:text-blue-700/80 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
          {synopsis}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
            {episodes} episodes
          </span>
          <span
            className={`px-2 py-1 rounded text-white text-xs ${
              status === "Finished Airing"
                ? "bg-green-500"
                : status === "Currently Airing"
                  ? "bg-blue-500"
                  : "bg-gray-500"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export const AnimeCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative p-4">
        <div className="flex justify-center w-full">
          <div className="w-[150px] h-[150px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
        </div>
        <div className="absolute top-2 right-2 w-12 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
      </div>

      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-2"></div>

        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded w-3/4"></div>
        </div>

        <div className="flex justify-between items-center">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
};
