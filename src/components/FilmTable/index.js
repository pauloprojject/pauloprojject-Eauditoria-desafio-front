import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { toast } from "react-toastify";
import { CustomTable } from "../CustomTable";

export function FilmTable({isOpen}){

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('Filme/TodosFilmes')
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
      title: 'Titulo',
      dataIndex: 'titulo',
      key: 'titulo'
    },
    {
      title: 'Classificação indicativa',
      dataIndex: 'classificacaoIndicativa',
      key: 'classificacaoIndicativa',
      render: text => text+'+'
    },
    {
      title: 'Lançamento',
      dataIndex: 'lancamento',
      key: 'lancamento',
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