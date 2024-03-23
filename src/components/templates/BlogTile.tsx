import { getPost } from "../../services/getPost";
import CardPost from "../fragments/CardPost";

export default function BlogTile() {
  const { data: posts = [] } = getPost();
  console.log(posts);

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post: any) => (
          <CardPost
            border={true}
            padding={true}
            height="fit"
            key={post.id}
            item={post}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
