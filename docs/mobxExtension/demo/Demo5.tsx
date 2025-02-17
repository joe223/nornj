import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { ValidateMessages } from 'nornj-react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const validateMessages: ValidateMessages = fieldData => ({
  required: name => `请输入${fieldData.label}`,
  types: {
    email: name => `${fieldData.label}格式不正确`,
    number: name => `${fieldData.label}请输入数字`
  },
  number: {
    range: (name, min, max) => `${fieldData.label}必须在${min}和${max}之间`
  }
});

export default props => {
  const { formData } = useLocalStore(() => (
    <mobxFormData validateMessages={validateMessages}>
      <mobxFieldData name="name" required />
      <mobxFieldData name="email" type="email" />
      <mobxFieldData name="age" type="number" min={0} max={99} />
      <mobxFieldData name="website" />
      <mobxFieldData name="introduction" />
    </mobxFormData>
  ));

  const onSubmit = () =>
    formData
      .validate()
      .then(values => {
        console.log(values);
      })
      .catch(errorInfo => {
        console.log(errorInfo);
      });

  return useObserver(() => (
    <Form {...layout} style={{ maxWidth: 600 }}>
      <Form.Item mobxField={formData.name} label="Name">
        <Input />
      </Form.Item>

      <Form.Item mobxField={formData.email} label="Email">
        <Input />
      </Form.Item>

      <Form.Item mobxField={formData.age} label="Age">
        <InputNumber />
      </Form.Item>

      <Form.Item mobxField={formData.website} label="Website">
        <Input />
      </Form.Item>

      <Form.Item mobxField={formData.introduction} label="Introduction">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  ));
};
