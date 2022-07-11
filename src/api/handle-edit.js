import { toast } from "react-toastify";
import { api } from ".";

export function HandleEdit(rotaPut, data, rotaGet, updateTable){
  api.put(rotaPut, data)
    .then(() => {
    api.get(rotaGet)
    .then(({data}) => {
      updateTable(data)
    });
    toast.success("Cadastro atualizado com sucesso!");
  })
  .catch(({res}) =>{
    toast.error('Erro ao tentar atualizar.');
  });
}