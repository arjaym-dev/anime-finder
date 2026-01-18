import Image from "next/image";
import Link from "next/link";

import { IAnime } from "../interfaces/anime";

export const AnimeFullDetail = (props: IAnime) => {
  const {
    title,
    title_english,
    images,
    type,
    episodes,
    status,
    score,
    aired,
    source,
    duration,
    rating,
    genres,
    synopsis,
    url,
  } = props;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Anime Image */}
        <div className="md:w-1/3 flex justify-center w-full">
          <div className="relative w-[150] h-[150]">
            <Image
              fill
              loading="eager"
              src={images?.jpg?.large_image_url || images?.jpg?.image_url}
              alt={title}
              className=""
              sizes="auto"
            />
          </div>
        </div>

        {/* Anime Details */}
        <div className="md:w-2/3 space-y-4">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <h1 className="text-3xl font-bold dark:text-white transition-all underline text-blue-400 hover:text-blue-700/80">
              {title}
            </h1>
          </Link>

          {title_english && (
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              {title_english}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Type:</span> {type}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Episodes:</span>{" "}
                {episodes || "Unknown"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Status:</span> {status}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Score:</span> {score || "N/A"}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Aired:</span>{" "}
                {aired?.string || "Unknown"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Source:</span> {source}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Duration:</span> {duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Rating:</span> {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* Genres */}
        {genres && genres.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Genres:
            </h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Synopsis */}
        {synopsis && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Synopsis:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {synopsis}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const AnimeCard = (props: IAnime) => {
  const { images, title, synopsis, score, episodes, status, mal_id } = props;

  const escapedTitle = title.replace(/[^a-zA-Z0-9-]/g, "-").toLowerCase();

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
        <Link href={`/${escapedTitle}/${mal_id}`} rel="noopener noreferrer">
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
