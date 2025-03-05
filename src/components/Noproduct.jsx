import React from 'react';
import { Button, Result } from 'antd';
import Products from '../pages/Products';
import { Link, Navigate } from 'react-router-dom';
const Noproduct = () => (
    <Result
        status="500"
        title="No Product"
        extra={<Button type="primary"><Link to={'/products'}>Back Shoping</Link></Button>}
    />
);
export default Noproduct;