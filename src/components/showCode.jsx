import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function ShowCode({ object, len }) {
  const [s, ss] = useState("");
  useEffect(() => {
    {
      for (let i = 0; i < len; i++) {
        ss((e) => e + `<div>
        <label>${object[0][i].name}</label>
        <input type={${object[0][i].type}} value={${object[0][i].name}} />
         </div>\n`
          // s.concat(
          //   ...e,
          //   `<div>
          //     <label>${object[0][i].name}</label>
          //     <input type={${object[0][i].type}} value={${object[0][i].name}} />
          //      </div>\n`
          // )
        );
      }

      console.log("showcode part");
      console.log(object[0][0]);
    }
  }, []);

  return (
    <SyntaxHighlighter
      language="jsx"
      style={dark}
      customStyle={{ padding: "2rem", margin: "0 auto" }}
      wrapLines={true}
      
    >
      {s}
    </SyntaxHighlighter>
  );
}
