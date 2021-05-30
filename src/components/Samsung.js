import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>SAMSUNG</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/samsung-galaxy-f52-5g/samsung-galaxy-f52-5g-06.jpg)`
                }}>
                    <p className='iphone-name'>Galaxy F52</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1080 x 2408 px (6.60")<br />
                        Battery: 4,500mAh<br />
                        CPU: Qualcomm Snapdragon 750G<br />
                        Clock rate: 2.20 GHz<br />
                        Number of cores: 8
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/samsung-galaxy-m42-5g/samsung-galaxy-m42-5g-04.jpg)`
                }}>
                    <p className='iphone-name'>Galaxy M42</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 720 x 1600 px (6.60")<br />
                        Battery: 5,000mAh <br />
                        CPU: Qualcomm Snapdragon 750G<br />
                        Clock rate: 2.20 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/samsung-galaxy-m12/samsung-galaxy-m12-14.jpg)`
                }}>
                    <p className='iphone-name'>Galaxy M12</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 720 x 1600 px (6.50")<br />
                        Battery: 6,000mAh<br />
                        CPU: Samsung Exynos 850<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8<br />
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/samsung-galaxy-f12/samsung-galaxy-f12-14.jpg)`
                }}>
                    <p className='iphone-name'>GALAXY F12</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 720 x 1600 px (6.50")<br />
                        Battery: 6,000mAh<br />
                        CPU: Samsung Exynos 850<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;