import React from "react";
import { useQuery } from "react-query";
import { API_URL } from "../../config";

export default function Home() {
  const { isLoading, error, data } = useQuery("posts", () => fetchPosts());
  
  // Fetch posts
  const fetchPosts = async () => {
    const url = `${API_URL}/posts`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  // Fetch post user

  if (isLoading) return <>Loading ...</>;
  if (error) return <>An error occurred while fetching</>;

  return (
    <div>
      <div className="flex justify-center">Wexiegram</div>
      <div className="flex flex-row divide-grey divide-x-2">
        <div className="w-1/6 m-2 justify-center">
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Inicio
            </button>
          </div>
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Buscar
            </button>
          </div>
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Mensajes
            </button>
          </div>
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Notificaciones
            </button>
          </div>
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Crear
            </button>
          </div>
          <div className="m-3 justify-center ">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Perfil
            </button>
          </div>
        </div>
        <div className="w-5/6 justify-center flex-column divide-grey divide-y-2 ">
          <div className="m-3 justify-center ">
            @roccotc <br />
            <img src="https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
            En el parque tomando sol
          </div>
          <div className="m-3 justify-center ">
            @pauborras5 <br />
            <img src="https://images.unsplash.com/photo-1606340374670-30b15ae97f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></img>
            Junto a mi bro! Viva Shakira!
          </div>
          <div className="m-3 justify-center ">
            @jotalr <br />
            <img src="https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
            Pau me tomó esta foto hoy... me veo bien no?
          </div>
          <div className="m-3 justify-center ">
            @juantoniodc <br />
            <img src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
            Tengo hambre :S
          </div>
        </div>
      </div>
    </div>
    
  );
}
