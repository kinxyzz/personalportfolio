import { getPost } from "../../services/getPost";
import MarkdownRenderer from "../elements/Markdown";

export default function BlogDetail() {
  const { data: posts } = getPost();

  console.log(posts);

  // const codeString = posts?.syntaxHighlight;

  // const handleCopy = () => {
  //   navigator.clipboard
  //     .writeText(codeString)
  //     .then(() => {
  //       console.log("Text copied to clipboard");
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy text to clipboard:", error);
  //     });
  // };

  if (Array.isArray(posts)) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="flex container flex-col gap-2 max-w-lg">
        <h2>{posts?.title}</h2>
        <MarkdownRenderer children={posts?.body_markdown} />
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <h2 className="mb-4 text-2xl font-bold">{posts?.title}</h2>
//       <div></div>
//       <div className="relative items-center">
//         <SyntaxHighlighter
//           wrapLongLines
//           language="javascript"
//           style={materialDark}
//         >
//           {codeString}
//         </SyntaxHighlighter>
//         <button
//           data-tooltip-content="Copy to Clipboard"
//           data-tooltip-id="copy-tooltip"
//           onClick={handleCopy}
//           className="absolute top-2 right-2 text-white text-2xl rounded-md cursor-pointer active:scale-95 active:text-primary"
//         >
//           <FaCopy />
//         </button>
//         <Tooltip id="copy-tooltip" />
//       </div>
//       <div className="mt-2 flex gap-2 items-center">
//         <p>More Info</p>
//         <a href={posts?.moreinfo}>{posts?.moreinfo || "-"}</a>
//       </div>
//     </div>
//   );
// }
