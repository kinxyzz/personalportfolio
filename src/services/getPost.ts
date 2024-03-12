import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export async function fetchPost({ id }: { id?: string }) {
  if (id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await response.json();
    return data;
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await response.json();
  return data;
}

export function getPost() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost({ id }),
  });

  return { data, isLoading };
}
