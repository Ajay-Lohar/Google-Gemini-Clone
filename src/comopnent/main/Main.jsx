import { useContext, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import styles from "/src/componentStyle/mainStyle/main.module.css";
import { Context } from "../../context/Context";
export const Main = () => {
  const msgEnd = useRef(null);

  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [resultData]);

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      onSent();
    }
  };
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.nav}`}>
          <p>Gemini 2.0 Flash</p>
          <img src={assets.ajay_icon} alt="" />
        </div>
        <div className={`${styles.mainContainer}`}>
          {!showResult ? (
            <>
              <div className={`${styles.mainHading}`}>
                <p>
                  <span>Hello Ajay.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              
            </>
          ) : (
            <div className={`${styles.result}`}>
              <div className={`${styles.resultTitle}`}>
                <img src={assets.ajay_icon} alt="" />
                <p>{recentPromt}</p>
              </div>
              <div className={`${styles.resultData}`}>
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className={`${styles.loader}`}>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p  dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
              <div ref={msgEnd} />
            </div>
            
          )}

          <div className={`${styles.mainBottom}`}>
            <div className={`${styles.searchBar}`}>
            <div>
            <img src={assets.plus_icon} alt="" />
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Ask Gemini"
                 onKeyDown={handleEnter}
              />
              </div>
              <div>
                <img src={assets.mic_icon} alt="" />
              </div>
            </div>
            <p className={`${styles.info}`}>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
