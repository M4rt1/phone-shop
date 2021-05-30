import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>MOTOROLA</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/motorola-moto-g40-fusion-dual-sim/motorola-moto-g40-fusion-dual-sim-06.jpg)`
                }}>
                    <p className='iphone-name'>G40 Fusion</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1080 x 2460 px (6.78")<br />
                        Battery: 6,000mAh<br />
                        CPU: Qualcomm Snapdragon 732G<br />
                        Clock rate: 2.30 GHz<br />
                        Number of cores: 8
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/motorola-moto-g60-dual-sim/motorola-moto-g60-dual-sim-06.jpg)`
                }}>
                    <p className='iphone-name'>G60</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2460 px (6.78")<br />
                        Battery: 6,000mAh <br />
                        CPU: Qualcomm Snapdragon 732G<br />
                        Clock rate: 2.30 GHz<br />
                        Number of cores: 8<br />
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/motorola-moto-g20/motorola-moto-g20-14.jpg)`
                }}>
                    <p className='iphone-name'>G20</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (6.50")<br />
                        Battery: 5,000mAh<br />
                        CPU: Unisoc T700<br />
                        Clock rate: 2.00 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/motorola-moto-e7i-power-dual-sim/motorola-moto-e7i-power-dual-sim-04.jpg)`
                }}>
                    <p className='iphone-name'>E7i Power</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 720 x 1600 px (6.50")<br />
                        Battery: 5,000mAh<br />
                        CPU: Unisoc SC9863A<br />
                        Clock rate: 1.60 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;