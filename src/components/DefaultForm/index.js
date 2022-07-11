import { Form, Input } from "antd";

export function DefaultForm({fields = []}){
  return (
    <>
      <Form>
        {fields.map(field => 
          <Form.Item
            label={field.label}
            rules={[{ required: true }]}
          >
            <Input onChange={(e) => field.setValue(e.target.value)} value={field.value}/>
          </Form.Item>)}
      </Form>
    </>
  );
}