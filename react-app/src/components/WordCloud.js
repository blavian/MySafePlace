import ReactWordcloud from 'react-wordcloud';
import { Resizable } from "re-resizable";
import words from "./words";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px purple",
};

export default function WordCloud() {
  return (
    <div>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300
        }}
        style={resizeStyle}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={words} />
        </div>
      </Resizable>
    </div>
  );
}