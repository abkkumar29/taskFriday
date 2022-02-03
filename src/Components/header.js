import React from "react";
import "./style.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row justify="center" align="middle">
          <Col span={8}></Col>
          <Col span={8}>
            <Link to="/">
              <div>
                <img src="https://www.asambeauty.com/static/media/headerSprite.2ed85dc6.svg#logo"></img>
              </div>
            </Link>
          </Col>

          <Col span={8}>
            <Row align="middle">
              <div className="heading-inner-div">
                <i class="las la-user la-4x"></i>
              </div>

              <div className="heading-inner-div">
                <i class="las la-heart la-4x"></i>
              </div>

              <div className="heading-inner-div">
                <i className="las la-shopping-cart la-4x"></i>
              </div>
            </Row>
          </Col>
        </Row>

        <hr className="hrLine"></hr>
      </div>
    );
  }
}

export default Header;
