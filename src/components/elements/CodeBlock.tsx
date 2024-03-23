import { useRef } from "react";
import { FaCopy } from "react-icons/fa6";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tooltip } from "react-tooltip";

export function code({ node, inline, className, children, ...props }: any) {
  const codeRef = useRef(null);
  const match = /language-(\w+)/.exec(className || "");
  const customChildren = String(children).replace(/\n$/, "");
  const handleCopy = () => {
    const el: any = codeRef.current;
    navigator.clipboard
      .writeText(el?.innerText)
      .then(() => {
        console.log("Text copied to clipboard");

        // Hide tooltip after 1 second
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };
  return !inline && match ? (
    <div ref={codeRef} className="relative">
      <SyntaxHighlighter
        customStyle={{
          padding: "1rem",
          minWidth: "40%",
        }}
        style={materialDark}
        PreTag="div"
        language={match[1]}
        {...props}
        wrapLongLines={true}
      >
        {customChildren}
      </SyntaxHighlighter>
      <button
        data-tooltip-content="Copy to Clipboard"
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
}
