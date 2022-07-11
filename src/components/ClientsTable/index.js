import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import confirm from "antd/lib/modal/confirm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HandleDelete } from "../../api/handle-delete";
import { api } from "../../api/index";
import { ClientsForm } from "../ClientsForm";
import { CustomTable } from "../CustomTable";

export function ClientsTable({isOpen}){
  const [data, setData] = useState([]);



  useEffect(() => {
    api.get('Cliente/TodosClientes')
    .then(({data}) => {
      setData(data)
    }).catch(({res}) =>{
      toast.error('Erro ao obter dados.');
    });
  }, []);

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Deseja mesmo deletar o cliente?',
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        HandleDelete('Cliente/DeletarCliente', id, 'Cliente/TodosClientes', setData);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

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
    },
    {
      title: 'Ações',
      key: 'Actions',
      render: (_, cliente) => (
        <Space size="middle">
          <Button><EditOutlined /></Button>
          <Button onClick={() => showDeleteConfirm(cliente.id)}><DeleteOutlined /></Button>
        </Space>
      )
    }
  ]
  

  

  

  return(
    <CustomTable Data={data} setData={setData} Columns={columns}  Form={ClientsForm}  />
  );
}