import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import { useState } from "react";


export function CustomTable({Data,setData, Columns, Form, relatorio=false}){
  const [isOpen, setIsOpen] = useState(false);
  const DefaultForm = Form({onClose:()=> setIsOpen(false), setData})
  const formFooter = DefaultForm.footer
  const ModalForm =  DefaultForm.form

  return( 
    <div className="tableCustom">
    
      {!relatorio && <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsOpen(true)}>
        Criar <PlusOutlined />
      </Button>}
      <Modal
        key="modal"
        title="Criar Cliente"
        centered
        visible={isOpen}
        footer={formFooter}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        width="50vw"
      >
        {ModalForm}
      </Modal>
      <Table columns={Columns} dataSource={Data} />
    </div>
  );
}