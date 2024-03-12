import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Posts {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
}

export default function BlogDetail() {
  const [posts, setPosts] = useState<Posts>({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);

  console.log(posts);

  return (
    <div>
      <h2>{posts?.title}</h2>
      <p>{posts?.body}</p>
    </div>
  );
}
