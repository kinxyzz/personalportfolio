import { useEffect, useState } from "react";
import CardPost from "../fragments/CardPost";

export default function BlogTile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );

      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);
  return posts.map((post: any) => (
    <CardPost
      border={true}
      height="fit"
      key={post.id}
      title={post.title}
      date="20 feb 2022"
      label={"testing"}
      id={post.id}
    >
      {post.body}
    </CardPost>
  ));
}
