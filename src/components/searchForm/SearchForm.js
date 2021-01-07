import React from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';

const SearchForm = ({ setLocality }) => {

    const onSearch = value => setLocality(value);
    const {Search} = Input
    return (

    <Search 
        placeholder="input search text" 
        onSearch={onSearch} 
        enterButton
        style={{ width: 200, margin: '0 10px' }} />
    )



}

export default SearchForm


