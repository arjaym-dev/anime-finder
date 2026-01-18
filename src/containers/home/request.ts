import { IAnime, IPagination } from "@/src/interfaces/anime";
import { useMutation, useQuery } from "@tanstack/react-query";

interface IApiResponse<TData = Record<string, unknown>[]> {
  data: TData;
  pagination: IPagination;
  message: string;
  status: string;
}

const getAnimeSearchRequest = async (
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

export const getAnimeDetailSearchRequest = async (
  id: string,
): Promise<Pick<IApiResponse<IAnime>, "data">> => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const { data = {} } = await res.json();

    return {
      data: data,
    };
  } catch (error) {
    throw error;
  }
};

export const useAnimeSearch = () => {
  return useMutation({
    mutationKey: ["anime-search"],
    mutationFn: getAnimeSearchRequest,
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export const useAnimeDetailSearch = (id: string) => {
  return useQuery({
    queryKey: ["anime-detail", id],
    queryFn: () => getAnimeDetailSearchRequest(id),
    enabled: !!id,
  });
};
