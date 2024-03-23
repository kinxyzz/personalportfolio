import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export async function fetchPost({ id }: { id?: string }) {
  if (id) {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    return data;
  }

  const res = await fetch("https://dev.to/api/articles?username=kinxyzz");
  const data = await res.json();

  return data;
}

export function getPost() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost({ id }),
  });

  if (id) {
    queryClient.prefetchQuery({
      queryKey: ["ProjectPortfolio", id],
      queryFn: () => fetchPost({ id }),
    });
  }

  return { data, isLoading };
}
