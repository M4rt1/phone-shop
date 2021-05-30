import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>HUAWEI</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/huawei-nova-8-pro/huawei-nova-8-pro-23.jpg)`
                }}>
                    <p className='iphone-name'>Nova 8 Pro</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1236 x 2676 px (6.72")<br />
                        Battery: 4,000mAh<br />
                        CPU: HiSilicon Kirin 985<br />
                        Clock rate: 2.58 GHz<br />
                        Number of cores: 8
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/huawei-mate-40e/huawei-mate-40e-13.jpg)`
                }}>
                    <p className='iphone-name'>Mate 40E</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1080 x 2376 px (6.50")<br />
                        Battery: 4,200mAh <br />
                        CPU: HiSilicon Kirin 990E<br />
                        Clock rate: 2.86 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/huawei-p40-proplus/huawei-p40-proplus-09.jpg)`
                }}>
                    <p className='iphone-name'>P40 PRO+</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1200 x 2640 px (6.58")<br />
                        Battery: 4,200mAh<br />
                        CPU: HiSilicon Kirin 990 5G<br />
                        Clock rate: 2.86 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/huawei-mate-x2/huawei-mate-x2-04.jpg)`
                }}>
                    <p className='iphone-name'>Mate X2</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 2480 x 2200 px (8.00")<br />
                        Battery: 4,500mAh<br />
                        CPU: Samsung Exynos 850<br />
                        Clock rate: 3.13 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;