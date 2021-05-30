import '../styles/Apple.css';

function Apple() {

    return (
        <>
            <p>OPPO</p>
            <div className='iphones'>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/oppo-reno-6-proplus-5g/oppo-reno-6-proplus-5g-06.jpg)`
                }}>
                    <p className='iphone-name'>Reno6 Pro+</p>
                    <p className='iphone-desc' style={{
                        marginTop: '-115%'
                    }}>
                        Display: 1080 x 2400 px (6.55")<br />
                        Battery: 4,500mAh<br />
                        CPU: Qualcomm Snapdragon 870<br />
                        Clock rate: 3.20 GHz<br />
                        Number of cores: 8
                        RAM: 12GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/oppo-k9-5g/oppo-k9-5g-16.jpg)`
                }}>
                    <p className='iphone-name'>K9</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2400 px (6.43")<br />
                        Battery: 4,300mAh <br />
                        CPU: Qualcomm Snapdragon 768G<br />
                        Clock rate: 2.80 GHz<br />
                        Number of cores: 8<br />
                        RAM: 8GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/oppo-a53s-5g/oppo-a53s-5g-10.jpg)`
                }}>
                    <p className='iphone-name'>A53s</p>
                    <p className='iphone-desc'>
                        Display: 720 x 1600 px (6.52")<br />
                        Battery: 5,000mAh<br />
                        CPU: MediaTek Dimensity 700 MT6833<br />
                        Clock rate: 2.20 GHz<br />
                        Number of cores: 8<br />
                        RAM: 6GB<br />
                    </p>
                </div>

                <div className='product' style={{
                    backgroundImage: `url(https://files.gsmchoice.com/phones/oppo-a95/oppo-a95-03.jpg)`
                }}>
                    <p className='iphone-name'>A95</p>
                    <p className='iphone-desc'>
                        Display: 1080 x 2400 px (6.43")<br />
                        Battery: 4,310mAh<br />
                        CPU: MediaTek Dimensity 800U<br />
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