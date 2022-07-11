import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { toast } from "react-toastify";
import { CustomTable } from "../CustomTable";

export function LocacaoTable({isOpen}){

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('Locacao/TodasLocacoes')
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
      title: 'Id do Cliente',
      dataIndex: 'clienteId',
      key: 'clienteId'
    },
    {
      title: 'Id do Filme',
      dataIndex: 'filmeId',
      key: 'filmeId'
    },
    {
      title: 'Data da Locação',
      dataIndex: 'dataLocacao',
      key: 'dataLocacao',
      render: text => new Date(text).toLocaleDateString()
    },
    {
      title: 'Data da Devolução',
      dataIndex: 'dataDevolucao',
      key: 'dataDevolucao',
      render: text => new Date(text).toLocaleDateString()
    },
    {
      title: 'Ações',
      key: 'Actions',
      render: (_, record) => (
        <Space size="middle">
          <Button><EditOutlined /></Button>
          <Button><DeleteOutlined /></Button>
        </Space>
      )
    }
  ]

  return(
    <CustomTable Data={data} Columns={columns}></CustomTable>
  );
}