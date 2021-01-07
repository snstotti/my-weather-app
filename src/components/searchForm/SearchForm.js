import React from 'react';

import { Input } from 'antd';
import 'antd/dist/antd.css';


const SearchForm = ({ setLocality }) => {

    const onSearch = (value) =>  setLocality(value);
   
    const {Search} = Input
    
    return (

    <Search 
        placeholder="input search text" 
        onSearch={onSearch} 
        
        enterButton
        allowClear
        style={{ width: 200, margin: '0 10px' }} />
    )



}

export default SearchForm


