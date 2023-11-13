import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";

function App() {
  const [file, setfile] = useState(null);
  const [AudioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || AudioStream;

  function handleAudioReset() {
    setfile(null);
    setAudioStream(null);
  }

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {isAudioAvailable ? (
          <FileDisplay
            handleAudioReset={handleAudioReset}
            file={file}
            AudioStream={setAudioStream}
          />
        ) : (
          <HomePage setfile={setfile} setAudioStream={setAudioStream} />
        )}
      </section>
      <h1 className="text-green-400"> hello </h1>
    </div>
  );
}

export default App;
