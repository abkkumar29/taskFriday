import React from "react";
import productData from "./products";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

class Main extends React.Component {
  productMini(product) {
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
          </Card>
        </Col>
      </Link>
    );
  }
  render() {
    return (
      <div>
        <Row justify="space-around">{productData.map(this.productMini)}</Row>
      </div>
    );
  }
}

export default Main;
