import { toast } from "react-toastify";
import { api } from ".";

export function HandleDelete(rotaDelete, id, rotaGet, updateTable){
  api.delete(rotaDelete, {
    params: {
      Id: id
    }
  }).then(() => {
    api.get(rotaGet)
    .then(({data}) => {
      updateTable(data)
    });
    toast.success("Cadastro deletado com sucesso!");
  })
  .catch(({res}) =>{
    toast.error('Erro ao tentar deletar.');
  });
}