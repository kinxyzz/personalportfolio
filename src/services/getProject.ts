import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabase";

export async function fetchProject(id?: string) {
  if (id) {
    const { data: ProjectPortfolio } = await supabase
      .from("ProjectPortfolio")
      .select("*, techStack(name)")
      .eq("id", Number(id))
      .single();

    return ProjectPortfolio;
  } else {
    const { data: ProjectPortfolio, error } = await supabase
      .from("ProjectPortfolio")
      .select("*, techStack(name)");

    if (error) {
      console.log(error.message);
    }

    return ProjectPortfolio;
  }
}

export function getProject() {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["ProjectPortfolio", id],
    queryFn: () => fetchProject(),
  });

  if (id) {
    queryClient.prefetchQuery({
      queryKey: ["ProjectPortfolio", id],
      queryFn: () => fetchProject(id),
    });
  }

  return { data, isLoading };
}
