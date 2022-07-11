import { Button } from "antd";
import { useState } from "react";
import { HandleCreate } from "../../api/handle-create";
import { DefaultForm } from "../DefaultForm";

export function ClientsForm({onClose, setData}){
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const fields = [
    {
      label: 'Nome',
      value: nome,
      setValue: setNome
    },
    {
      label: 'Cpf',
      value: cpf,
      setValue: setCpf
    },
    {
      label: 'Data de Nascimento',
      value: dataNascimento,
      setValue: setDataNascimento
    }
  ]

  const resetForm = () => {
    setNome("");
    setCpf("");
    setDataNascimento("");
  }
  const handleSubmit = () => {
    HandleCreate('Cliente/CadastrarCliente', {nome, cpf, dataNascimento}, 'Cliente/TodosClientes', setData);
    resetForm();
  }
  return {
    form: <DefaultForm fields={fields} />,
    footer: [<Button onClick={onClose}>Cancelar</Button>,<Button type="primary" onClick={()=>handleSubmit()}>Criar</Button>]
  }
    
  
}