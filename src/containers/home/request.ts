import { IAnime, IPagination } from "@/src/interfaces/anime";
import { useMutation } from "@tanstack/react-query";

interface IApiResponse<TData = Record<string, unknown>[]> {
  data: TData;
  pagination: IPagination;
  message: string;
  status: string;
}

const useAnimeSearchRequest = async (
  query: string,
): Promise<IApiResponse<IAnime[]>> => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const {
      data = [],
      pagination = {},
      message = "",
      status = "",
    } = await res.json();

    return {
      data: data,
      pagination: pagination,
      message: message,
      status: status,
    };
  } catch (error) {
    throw error;
  }
};

export const useAnimeSearch = () => {
  return useMutation({
    mutationKey: ["anime-search"],
    mutationFn: useAnimeSearchRequest,
    onSuccess: (data) => {
      console.log("Search successful:", data);
    },
    onError: (error) => {
      console.error("Search failed:", error);
    },
  });
};
