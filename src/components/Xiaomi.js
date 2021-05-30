import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>XIAOMI</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/xiaomi-mi-11x-pro/xiaomi-mi-11x-pro-08.jpg)`
                }}>
                    <p className='iphone-name'>Mi 11X Pro</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1080 x 2400 px (6.67")<br />
                        Battery: 4,520mAh<br />
                        CPU: Qualcomm Snapdragon 888<br />
                        Clock rate: 2.84 GHz<br />
                        Number of cores: 8
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/xiaomi-mi-mix-fold/xiaomi-mi-mix-fold-09.jpg)`
                }}>
                    <p className='iphone-name'>Mi Mix Fold</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 840 x 2520 px (6.52")<br />
                        Battery: 5,020mAh <br />
                        CPU: Qualcomm Snapdragon 888<br />
                        Clock rate: 2.84 GHz<br />
                        Number of cores: 8<br />
                        RAM: 16GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/xiaomi-mi-11-ultra/xiaomi-mi-11-ultra-04.jpg)`
                }}>
                    <p className='iphone-name'>Mi 11 Ultra</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1440 x 3200 px (6.81")<br />
                        Battery: 5,000mAh<br />
                        CPU: Qualcomm Snapdragon 888<br />
                        Clock rate: 2.84 GHz<br />
                        Number of cores: 8<br />
                        RAM: 12GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/xiaomi-black-shark-4-pro/xiaomi-black-shark-4-pro-08.jpg)`
                }}>
                    <p className='iphone-name'>Black Shark 4 Pro</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-145%'
                    }}>
                        Display: 1080 x 2400 px (6.67")<br />
                        Battery: 4,500mAh<br />
                        CPU: Qualcomm Snapdragon 888<br />
                        Clock rate: 2.84 GHz<br />
                        Number of cores: 8<br />
                        RAM: 12GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;