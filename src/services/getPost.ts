import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export async function fetchPost({ id }: { id?: string }) {
  if (id) {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(
      "https://dev.to/api/articles?username=kinxyzz&page=1"
    );
    const data = await res.json();

    return data;
  }
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
      queryKey: ["posts", id],
      queryFn: () => fetchPost({ id }),
    });
  }

  return { data, isLoading };
}
