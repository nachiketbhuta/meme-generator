import { useEffect, useState } from "react";

export interface Meme {
  id: string;
  name: string;
  url: string;
}

const MemeContainer = (props: any) => {
  return (
    <>
      <h1 className="meme-title">Title : {props.name.toString()}</h1>
      <img src={props.url.toString()} alt="meme from reddit" />
    </>
  );
};

const App = () => {
  const [memes, setMemes] = useState<Meme[] | undefined>();

  useEffect(() => {
    const getMeme = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const { data } = await response.json();
        setMemes(data.memes);
      } catch (error) {
        alert(error);
      }
    };

    getMeme();
  }, []);

  return (
    <div className="row">
      {memes?.map((meme: Meme | undefined, index: number) => {
        return (
          <div className="column">
            <MemeContainer name={meme?.name} url={meme?.url} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
