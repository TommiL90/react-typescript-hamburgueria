
import { SubmitHandler } from "react-hook-form/dist/types";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { StyledFormSearch } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-toastify";


interface iFormSearch {
  value: string;
}



function SearchForm() {

  const { products, setFilteredList } = useContext(CartContext)

  const { register, handleSubmit, reset } = useForm<iFormSearch>();

  const submit: SubmitHandler<iFormSearch> = (data) => {

   

    const results = products.filter( e => e.name.toLowerCase().includes(data.value.toLowerCase()) )
    
    
    if(results.length){
      setFilteredList(results)
    }else{
      toast.warn("Produto não encontrado")
     
    }
  };

  return (
    <StyledFormSearch onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        placeholder="Digite aquí sua pesquiça"
        required
        {...register("value")}
      />

      <button type="submit">
        <FiSearch />
      </button>
    </StyledFormSearch>
  );
}

export default SearchForm;
