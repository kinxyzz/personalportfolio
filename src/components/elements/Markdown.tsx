import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Tooltip } from "react-tooltip";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
type MarkdownRendererProps = {
  children: string;
};

const markDownSyntax = {
  code({ node, inline, className, children, ...props }: any) {
    const [active, setActive] = useState(true);
    const codeRef = useRef(null);
    const match = /language-(\w+)/.exec(className || "");
    const customChildren = String(children).replace(/\n$/, "");
    const handleCopy = () => {
      const myboolean = !active;
      setActive(myboolean);
      console.log({ active, myboolean });

      const el: any = codeRef.current;
      navigator.clipboard
        .writeText(el?.innerText)
        .then(() => {
          console.log("Text copied to clipboard");

          // Hide tooltip after 1 second
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        })
        .finally(() => {
          setActive(true);
        });
    };
    return !inline && match ? (
      <div ref={codeRef} className="relative">
        <SyntaxHighlighter
          customStyle={{
            padding: "1rem",
            minWidth: "40%",
            borderRadius: "0.375rem",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          style={atomDark}
          PreTag="div"
          language={match[1]}
          {...props}
          wrapLongLines={true}
        >
          {customChildren}
        </SyntaxHighlighter>
        <button
          data-tooltip-content={active ? "Copy to Clipboard" : ""}
          data-tooltip-id="copy-tooltip"
          onClick={handleCopy}
          className="absolute top-2 right-2 text-white text-2xl rounded-md cursor-pointer active:scale-95 active:text-primary"
        >
          <FaCopy />
        </button>
        <Tooltip id="copy-tooltip" />
      </div>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownRenderer({
  children: markdown,
}: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={markDownSyntax}
    >
      {markdown}
    </Markdown>
  );
}
