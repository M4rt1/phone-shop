import '../styles/Products.css';
import React, { useState } from 'react';
import Apple from './Apple';

function Products() {
    const [brandState, setBrandState] = useState('');
    console.log(brandState);
    return (
        <div className='products-container'>
            {
                brandState === '' ?
                    <>
                        <p>Select brand</p>
                        <div className='brand-container'>
                            <button onClick={() => setBrandState('apple')}>Apple</button>
                            <button onClick={() => setBrandState('nokia')}>Nokia</button>
                            <button onClick={() => setBrandState('samsung')}>Samsung</button>
                            <button onClick={() => setBrandState('huawei')}>Huawei</button>
                            <button onClick={() => setBrandState('oppo')}>OPPO</button>
                            <button onClick={() => setBrandState('maxcom')}>MaxCom</button>
                            <button onClick={() => setBrandState('lg')}>LG</button>
                            <button onClick={() => setBrandState('motorola')}>Motorola</button>
                            <button onClick={() => setBrandState('xiaomi')}>Xiaomi</button>
                        </div>
                    </> :
                    brandState === 'apple' ?
                        <>
                            <button onClick={() => setBrandState('')}>Back</button>
                            <Apple />
                        </> :
                        brandState === 'nokia' ?
                            <>
                                <button onClick={() => setBrandState('')}>Back</button>
                                <p>NOKIA</p>
                            </> :
                            brandState === 'samsung' ?
                                <>
                                    <button onClick={() => setBrandState('')}>Back</button>
                                    <p>SAMSUNG</p>
                                </> :
                                brandState === 'huawei' ?
                                    <>
                                        <button onClick={() => setBrandState('')}>Back</button>
                                        <p>HUAWEI</p>
                                    </> :
                                    brandState === 'oppo' ?
                                        <>
                                            <button onClick={() => setBrandState('')}>Back</button>
                                            <p>OPPO</p>
                                        </> :
                                        brandState === 'maxcom' ?
                                            <>
                                                <button onClick={() => setBrandState('')}>Back</button>
                                                <p>MAXCOM</p>
                                            </> :
                                            brandState === 'lg' ?
                                                <>
                                                    <button onClick={() => setBrandState('')}>Back</button>
                                                    <p>LG</p>
                                                </> :
                                                brandState === 'motorola' ?
                                                    <>
                                                        <button onClick={() => setBrandState('')}>Back</button>
                                                        <p>MOTOROLA</p>
                                                    </> :
                                                    brandState === 'xiaomi' ?
                                                        <>
                                                            <button onClick={() => setBrandState('')}>Back</button>
                                                            <p>XIAOMI</p>
                                                        </> :

                                                        ''
            }
        </div>
    )
}

export default Products;