import { useEffect, useState } from "react";

export interface Meme {
  title: string;
  url: string;
  author: string;
}

const App = () => {
  const [meme, setMeme] = useState<Meme | undefined>();

  useEffect(() => {
    const getMeme = async () => {
      try {
        const response = await fetch("https://meme-api.com/gimme");
        const data = await response.json();
        setMeme(data);
      } catch (error) {
        alert(error);
      }
    };

    getMeme();
  }, []);

  return (
    <div>
      <h1 className="meme-title">Title : {meme?.title.toString()}</h1>
      <h2 className="meme-title">Author : {meme?.author.toString()}</h2>
      <img src={meme?.url.toString()} alt="meme from reddit" />
    </div>
  );
};

export default App;
