import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabase";

export async function fetchPost({ id }: { id?: string }) {
  if (id) {
    const { data: blog } = await supabase
      .from("blog")
      .select("*")
      .eq("id", Number(id))
      .single();
    return blog;
  }

  let { data: blog, error } = await supabase.from("blog").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return blog;
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
