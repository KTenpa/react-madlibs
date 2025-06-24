function MadlibStory({ data, restart }) {
    const { noun, verb, adjective, adverb } = data;
    return (
      <div className="space-y-4">
        <p>
          Once upon a time, there was a very {adjective} {noun} who loved to {verb} {adverb}.
        </p>
        <button onClick={restart} className="bg-green-500 text-white px-3 py-1 rounded">
          Create Another
        </button>
      </div>
    );
  }
  
  export default MadlibStory;