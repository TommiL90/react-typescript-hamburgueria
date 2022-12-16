export interface iChildrenProps {
    children: React.ReactNode;
  }
  
  export interface iDataRegister {
    name: string;
    email: string;
    password: string;
    repeatPassword?: string;
  }
  
  export interface iDataResponseRegister {
    accessToken: string;
    user: iUserProps;
}

  export interface iUserProps{
    email: string;
    name: string;
    id: number | string;
    password?: string;
    repeatPassword?: string;
  }

  export interface iDataLogin{
    email: string;
    password:string;
}

export interface iDataResponseLogin {
    accessToken: string;
    user: iUserProps
}
  

  export interface iChildrenProps {
    children: React.ReactNode;
}

export interface iProduct{
    category:string;
    id: number;
    img: string;
    name: string;
    price: number;
    count?: number;
}

export interface iCurrentCart{
    category:string;
    id: number;
    img: string;
    name: string;
    price: number;
    count?: number;
}

export interface iGetVerificationUser{
  password: string;
  id: number;
  name: string;
  email: string;
}

export interface iGetVerificationproducts{
  data: iProduct[]
}

export interface iUserContext {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
  getOpositeTheme: () => "light" | "dark";
  registerUser(data: iDataRegister): Promise<void>;
  loading: boolean;
  loginUser: (data: iDataLogin) => Promise<void>;
  user: iUserProps | null;
  verification: boolean;
  
}

export interface iCartContext{
    products: iProduct[];
    setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
    currentCart: iCurrentCart[];
    setCurrentCart: React.Dispatch<React.SetStateAction<iCurrentCart[]>>;
    handleAddProduct: (productId: iProduct) => void;
    showCart: boolean; 
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
    addSameProduct: (productId: number) => void;
    subSameProduct: (productId: number) => void;

   
}





























//---->
// export interface iOperationItem{
//     value: number;
//     type: "sum" | "sub"
// }

// const[count, setCount] = useState(0)
// const [value, setValue] = useState([] as iOperationItem[])

// function operation (operationItem : iOperationItem){

//     if(operationItem.type === "sum"){
//         setCount(count + operationItem.value)
//     }else if (operationItem.type === "sub"){
//         setCount(count - operationItem.value)
//     }

//     setValue([...value, operationItem])
// }

// function resetCount (){
//     setCount(0)
//     setValue([])
// }

// ()=> tipaeje pra funcoes que nao tem retorno