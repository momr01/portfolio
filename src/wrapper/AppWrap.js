import { NavigationDots, SocialMedia } from "../components";
import { images } from "../constants";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            {/* <p className="p-text">@2023 Maximiliano Montaña</p> */}
            <p className="p-text" style={{display: 'flex', alignItems: 'center'}}>
              <span style={{marginRight: '5px'}}>@2023</span>
              <img style={{ width: "90px" }} src={images.logo1} alt="logo" />
            </p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
