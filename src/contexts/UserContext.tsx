import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iUserContext, iChildrenProps, iUserProps, iDataRegister, iDataResponseLogin, iDataLogin, iDataResponseRegister,  iGetVerificationUser } from "./types";



export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iChildrenProps) => {

  const [currentTheme, setCurrentTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUserProps | null>(null)
  const [verification, setVerification] = useState(true)
  const navigate = useNavigate()
  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  useEffect(()=> {

    async function loadUser(){
  
      const token = localStorage.getItem("@BurguerKenzie:Token")
      const id = localStorage.getItem("@BurguerKenzie:Id")


      if (!token){
        setVerification(false)
        return
      }
  
      try {
        
        const response = await api.get<iGetVerificationUser>(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        setUser(response.data)
  
      } catch (error) {
        console.log(error)
      } finally {
        setVerification(false)
      }
  
    }
    loadUser()
  }, [])


  async function registerUser(data: iDataRegister) {
    try {
      setLoading(true)

      const response = await api.post<iDataResponseRegister>("/users", data);

      localStorage.setItem("@BurguerKenzie:Token", response.data.accessToken)
      localStorage.setItem("@BurguerKenzie:Id", JSON.stringify(response.data.user.id))
      setUser(response.data.user)
      toast.success("Usuario Cadastrado com sucesso, Bem-Vindo!!!")
      navigate("/home")    

    } catch (error) {
      console.log(error);
      localStorage.removeItem("@BurguerKenzie:Token")
      localStorage.removeItem("@BurguerKenzie:Id")
    } finally {
      setLoading(false)
    }
  }

  async function loginUser(data: iDataLogin) {
    try {

      setLoading(true)

      const response = await api.post<iDataResponseLogin>("/login", data);
      setUser(response.data.user)
      localStorage.setItem("@BurguerKenzie:Token", response.data.accessToken)
      localStorage.setItem("@BurguerKenzie:Id", JSON.stringify(response.data.user.id))
      toast.success("Bem-vindo amigão!!!")
      navigate("/home")

    } catch (error) {
      console.log(error)
      // const currentError = error as AxiosError<iAxiosError>
      // currentError.response?.data.error
      toast.error("User ou Pass incorreto, tente de novo!")

    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        getOpositeTheme,
        registerUser,
        loading,
        loginUser,
        user,
        verification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
