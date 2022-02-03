import React from "react";
import productData from "./products";
import { Row, Col, Card, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";

class Main extends React.Component {
  productMini = (product) => {
    const link = `/product/${product.id}`;
    return (
      <Link to={link} key={product.id}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.image} />}
          >
            <Card.Meta title={product.name} description={product.description} />
            <Card.Meta title={product.price} />
            <br></br>
            <div className="addCartOnHover" onClick={(e) => e.preventDefault()}>
              <InputNumber min={1} max={10} defaultValue={1} />
            </div>
            <br></br>
            <div className="addCartOnHover" onClick={(e) => e.preventDefault()}>
              <Button id="buttonHome" className="buttonStyle">
                Add to Cart
              </Button>
            </div>
          </Card>
        </Col>
      </Link>
    );
  };
  render() {
    return (
      <div className="productListBox">
        <Row gutter={[32, 8]}>{productData.map(this.productMini)}</Row>
      </div>
    );
  }
}

export default Main;
