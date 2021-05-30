import '../styles/Products.css';
import React, { useState } from 'react';
import Apple from './Apple';
import Nokia from './Nokia';
import Samsung from './Samsung';
import Huawei from './Huawei';
import Oppo from './Oppo';
import MaxCom from './MaxCom';
import LG from './LG';
import Motorola from './Motorola';
import Xiaomi from './Xiaomi';

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
                                <Nokia />
                            </> :
                            brandState === 'samsung' ?
                                <>
                                    <button onClick={() => setBrandState('')}>Back</button>
                                    <Samsung />
                                </> :
                                brandState === 'huawei' ?
                                    <>
                                        <button onClick={() => setBrandState('')}>Back</button>
                                        <Huawei />
                                    </> :
                                    brandState === 'oppo' ?
                                        <>
                                            <button onClick={() => setBrandState('')}>Back</button>
                                            <Oppo />
                                        </> :
                                        brandState === 'maxcom' ?
                                            <>
                                                <button onClick={() => setBrandState('')}>Back</button>
                                                <MaxCom />
                                            </> :
                                            brandState === 'lg' ?
                                                <>
                                                    <button onClick={() => setBrandState('')}>Back</button>
                                                    <LG />
                                                </> :
                                                brandState === 'motorola' ?
                                                    <>
                                                        <button onClick={() => setBrandState('')}>Back</button>
                                                        <Motorola />
                                                    </> :
                                                    brandState === 'xiaomi' ?
                                                        <>
                                                            <button onClick={() => setBrandState('')}>Back</button>
                                                            <Xiaomi />
                                                        </> :

                                                        ''
            }
        </div>
    )
}

export default Products;