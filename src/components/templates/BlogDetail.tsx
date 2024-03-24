import { getPost } from "../../services/getPost";
import Loading from "../elements/Loading";
import MarkdownRenderer from "../elements/Markdown";

export default function BlogDetail() {
  const { data: posts } = getPost();

  if (Array.isArray(posts)) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center ">
      <div id="blogDetail" className="flex container flex-col gap-2 max-w-lg">
        <h2>{posts?.title}</h2>
        <MarkdownRenderer children={posts?.body_markdown} />
      </div>
    </div>
  );
}
