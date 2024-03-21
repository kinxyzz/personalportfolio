import { getPost } from "../../services/getPost";

export default function BlogDetail() {
  const { data: posts } = getPost();

  if (Array.isArray(posts)) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">{posts?.title}</h2>
      <div
        id="workBody"
        className="flex gap-2 flex-col"
        dangerouslySetInnerHTML={{ __html: posts?.body || "" }}
      ></div>
      <div className="mt-2 flex gap-2 items-center">
        <p>More Info</p>
        <a href={posts?.moreinfo}>{posts?.moreinfo}</a>
      </div>
    </div>
  );
}
