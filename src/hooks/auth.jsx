import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, password }){

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; /* create a bearer token for each user request */

      setData({user, token});

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }

  }

  function signOut(){
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }){
    try {

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado!");

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []) 
  /* 
    O vetor vazio significa que o useEffect vai agir somente uma vez - quando o componente for renderizado. 
    Se colocássemos 'data', por exemplo, ele agiria toda vez que o 'data' fosse atualizado.
  */

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut, 
      updateProfile,
      user:data.user, 
      }}>
      {children}
    </AuthContext.Provider>
  );
}

/* abaixo está em camel para seguir o padrão dos hooks */
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };