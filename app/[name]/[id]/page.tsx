import { AnimeFullDetail } from "@/src/components/anime-card";

import { getAnimeDetailSearchRequest } from "@/src/containers/home/request";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; name: string }>;
}) {
  const { id, name } = await params;

  const response = await getAnimeDetailSearchRequest(id);
  const data = response.data;
  const escapedTitle = data.title.replace(/[^a-zA-Z0-9-]/g, "-").toLowerCase();

  if (!data || name !== escapedTitle) {
    notFound();
  }

  return (
    <div className="my-10">
      <AnimeFullDetail {...data} />
    </div>
  );
}
