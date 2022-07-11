import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import confirm from "antd/lib/modal/confirm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HandleDelete } from "../../api/handle-delete";
import { api } from "../../api/index";
import { ClientsForm } from "../ClientsForm";
import { CustomTable } from "../CustomTable";

export function RelatorioClientesEmAtrasoTable({isOpen}){
  const [data, setData] = useState([]);



  useEffect(() => {
    api.get('Relatorios/RelatorioDeClientesEmAtraso')
    .then(({data}) => {
      setData(data)
    }).catch(({res}) =>{
      toast.error('Erro ao obter dados.');
    });
  }, []);

  if(!isOpen){
    return null;
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome'
    },
    {
      title: 'Cpf',
      dataIndex: 'cpf',
      key: 'cpf'
    },
    {
      title: 'Data de nascimento',
      dataIndex: 'dataNascimento',
      key: 'dataNascimento',
      render: text => new Date(text).toLocaleDateString()
    }
  ]

  return(
    <CustomTable Data={data} setData={setData} Columns={columns}  Form={ClientsForm} relatorio />
  );
}