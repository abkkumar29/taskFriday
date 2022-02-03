import React from "react";
import "./style.scss";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img src="https://www.asambeauty.com/static/media/headerSprite.2ed85dc6.svg#logo"></img>
          <div className="heading-inner-div">
            Account
            <i class="far fa-user"></i>
          </div>
        </div>

        <hr className="hrLine"></hr>
      </div>
    );
  }
}

export default Header;
