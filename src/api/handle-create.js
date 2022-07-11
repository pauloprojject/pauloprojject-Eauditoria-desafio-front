import { toast } from "react-toastify";
import { api } from ".";

export function HandleCreate(rotaPost, data, rotaGet, updateTable){
  api.post(rotaPost, data)
    .then(() => {
    api.get(rotaGet)
    .then(({data}) => {
      updateTable(data)
    });
    toast.success("Cadastro criado com sucesso!");
  })
  .catch(({res}) =>{
    toast.error('Erro ao tentar cadastrar.');
  });
}