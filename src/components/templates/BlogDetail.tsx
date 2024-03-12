import { getPost } from "../../services/getPost";

export default function BlogDetail() {
  const { data: posts } = getPost();

  return (
    <div>
      <h2>{posts?.title}</h2>
      <p>{posts?.body}</p>
    </div>
  );
}
