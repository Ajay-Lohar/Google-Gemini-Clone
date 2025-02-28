import styles from "/src/componentStyle/sidebarStyle/sidebar.module.css";
import { assets } from "../../assets/assets";
import { useCallback, useContext, useState } from "react";
import { Context } from "../../context/Context";

export const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, prevPromt, setRecentpromt, newChat } = useContext(Context);
  const loadPromt = async (promt) => {
    setRecentpromt(promt);
    await onSent(promt);
  };
  return (
    <>
      <div className={`${styles.sidebar}`}>
        <div className="top">
          <img
            onClick={() => setExtend((prev) => !prev)}
            className={`${styles.menuIcon}`}
            src={assets.menu_icon}
            alt=""
          />
          <div onClick={() => newChat()} className={`${styles.newChat}`}>
            <img src={assets.plus_icon} alt="" />
            {extend ? <p>New Chat</p> : null}
          </div>
          {extend ? (
            <div className={`${styles.resent}`}>
              <p className={`${styles.resentName}`}>Recent</p>
              {prevPromt.map((item, index) => (
                <div
                  onClick={() => loadPromt(item)}
                  key={index}
                  className={`${styles.resentEntry}`}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className={`${styles.bottom}`}>
          <div className={`${styles.bottomItems}`}>
            <img src={assets.question_icon} alt="" />
            {extend ? <p>Help</p> : null}
          </div>
          <div className={`${styles.bottomItems}`}>
            <img src={assets.history_icon} alt="" />
            {extend ? <p>Activity</p> : null}
          </div>
          <div className={`${styles.bottomItems}`}>
            <img src={assets.setting_icon} alt="" />
            {extend ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};
