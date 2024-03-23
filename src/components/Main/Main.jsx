import { useContext } from "react"
import { assets } from "../../assets/assets"
import { Context } from "../../context/Context"
import "./Main.css"

const Main = () => {

    const {onSent,recentPrompt,showResult,loading, resultData, input, setInput} = useContext(Context);
    let handleKeyEvent = (e) => {
        if(e.key ==="Enter"){
            onSent();
        }
    }
    let handleCardClick = (e) => {
        onSent(e.target.innerText);
    }
    
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.pic_icon} alt="Profile"/>
            </div>
            <div className="main-container">
                {!showResult? 
                <>
                 <div className="greet">
                    <p><span>Hello, Earthborn.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div onClick={handleCardClick} className="card">
                        <p>Give me ways to add certain foods to my diet</p>
                        <img src={assets.compass_icon}  />
                    </div>
                    <div onClick={handleCardClick} className="card">
                        <p >Create a list of power phrases for my resume</p>
                        <img src={assets.bulb_icon}  />
                    </div>
                    <div onClick={handleCardClick} className="card">
                        <p>organize my closet</p>
                        <img src={assets.message_icon}  />
                    </div>
                    <div onClick={handleCardClick} className="card">
                        <p>Tell me about Next.Js</p>
                        <img src={assets.code_icon}  />
                    </div>
                </div>
                </>
                :
                <div className="result">
                    <div className="result-title">
                        <img src={assets.pic_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? 
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>

                }
               
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=> setInput(e.target.value)} onKeyDown={handleKeyEvent} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            {input && <img onClick={()=> onSent()} src={assets.send_icon} />}
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>

            </div>
            </div>
    )
}

export default Main