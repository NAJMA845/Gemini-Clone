import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context'; 

const Main = () => {
    const {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
      } = useContext(Context)
    
    return(
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
            {!showResult?<>
                <div className="greeting">
                    <p><span>Hello, Dane</span></p>
                    <p>How can I support you further?</p>
                </div>
                <div className="cards">
                <div className="card">
                <p>Discover breakthroughs and applications shaping the future of technology.</p>
                <img src={assets.bulb_icon} alt=""/>
                </div>

                <div className="card">
                <p>Find resources and guides to navigate the tech world.</p>
                <img src={assets.compass_icon} alt=""/>
                </div>

                <div className="card">
                <p>Explore coding with frameworks that simplify smart solution development.</p>
                <img src={assets.code_icon} alt=""/>
                </div>

                <div className="card">
                <p> Improve messaging systems with tools for seamless interactions.</p>
                <img src={assets.message_icon} alt=""/>
                </div>
                </div>
                </>:<div className='result'>
                    <div className="result-title">
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentPrompt}</p>
               </div>
               <div className="result-data">
                    <img src={assets.gemini_icon} alt=""/>
                    {loading
                     ?<div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>
                     </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    </div>
                </div>}
        
                <div className="main-bottom">
                    <div className='search-box'>
                        <input   value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Ask Gemini'/>                    
                    <div>
                    <img src={assets.gallery_icon} alt=""/>
                    <img src={assets.mic_icon} alt=""/>
                    {input? <img   onClick={() => onSent()} src={assets.send_icon} alt=""/>:null}
                    </div>
                </div>
            <p className="bottom-info">
            Gemini may provide inaccurate information, including about individuals and follow proper privacy practices when using the app.
            </p>
        </div>
        </div>
        </div>
    )
}
export default Main