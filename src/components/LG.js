import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>LG</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/lg-k62plus-k525bmw/lg-k62plus-k525bmw-06.jpg)`
                }}>
                    <p className='iphone-name'>K62+</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (6.60")<br />
                        Battery: 4,000mAh<br />
                        CPU: MediaTek Helio P35 MT6765<br />
                        Clock rate: 2.30 GHz<br />
                        Number of cores: 8
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/lg-w41plus/lg-w41plus-02.jpg)`
                }}>
                    <p className='iphone-name'>W41+</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (6.55")<br />
                        Battery: 5,000mAh <br />
                        CPU: MediaTek Helio G35<br />
                        Clock rate: 2.30 GHz<br />
                        Number of cores: 8<br />
                        RAM: 4GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/lg-phoenix-4/lg-phoenix-4-06.jpg)`
                }}>
                    <p className='iphone-name'>Phoenix 4</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 720 x 1280 px (5.00")<br />
                        Battery: 2,410mAh<br />
                        CPU: Qualcomm Snapdragon 425 8917<br />
                        Clock rate: 1.40 GHz<br />
                        Number of cores: 4<br />
                        RAM: 2GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/lg-wing-dual-sim/lg-wing-dual-sim-05.jpg)`
                }}>
                    <p className='iphone-name'>Wing</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2460 px (6.80")<br />
                        Battery: 4,000mAh<br />
                        CPU: Qualcomm Snapdragon 765G<br />
                        Clock rate: 2.40 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

            </div>
        </>
    )
}

export default Apple;