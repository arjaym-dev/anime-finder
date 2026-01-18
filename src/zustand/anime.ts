import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IAnime } from "../interfaces/anime";

export interface IAnimeState {
  animes: IAnime[];
  theme: string;
}

interface IAnimeActionState {
  setAnimes: (animes: IAnime[]) => void;
  setTheme: (theme: string) => void;
}

const defaultState = {
  theme: "light",
  animes: [],
  selectedAnime: null,
};

const useAnimeState = create<IAnimeState & IAnimeActionState>()(
  persist(
    (set) => ({
      ...defaultState,

      setAnimes: (animes) => set(() => ({ animes })),
      setTheme: (theme) => set(() => ({ theme })),
    }),
    {
      name: "anime-storage",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);

export default useAnimeState;
