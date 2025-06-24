import { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

function Madlib() {
  const [storyData, setStoryData] = useState(null);

  function handleFormSubmit(data) {
    setStoryData(data);
  }

  function restart() {
    setStoryData(null);
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">React MadLibs</h1>
      {storyData ? (
        <MadlibStory data={storyData} restart={restart} />
      ) : (
        <MadlibForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Madlib;