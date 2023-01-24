import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "../components/Emoji";

function createEmoji(emoji) {
  return (
    <Emoji emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
