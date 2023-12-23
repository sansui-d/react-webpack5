import React from 'react';
import { Outlet } from 'react-router-dom'

function Product() {
    return (
        <div>
            <div>产品</div>
            <Outlet />
        </div>
    );
}

export default Product;
