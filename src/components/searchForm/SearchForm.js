import React from 'react';

import { Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';


const SearchForm = ({ setLocality }) => {

    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = (values) => {
        if(values.text){
            setLocality(values.text)
        onReset()
        }
        
    } 

  

    return (
        <Form 
            form={form} 
           
            name="basic"
            onFinish={onFinish}  
            initialValues={{ remember: true }} 
            style={{ display: 'flex', margin: '10px' }}
             >

            <Form.Item
              
                placeholder="input search text"
                style={{ width: 200, margin: '0' }}
                name='text' >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" >
                        search
                </Button>
            </Form.Item>
        </Form>
    )

}

export default SearchForm


