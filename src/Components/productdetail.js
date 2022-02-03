import React from "react";
import productData from "./products";
import { Row, Card, Rate, Carousel, Button ,InputNumber  } from "antd";
import "./style.scss";
import { DownloadOutlined } from "@ant-design/icons";
const { Meta } = Card;

class ProductDetails extends React.Component {
  renderDetails(product) {
    if (product) {
      return (
        <div className="box">
          <div>
            <img
              alt="example"
              src={product.image2}
              className="image-dimension"
            />
          </div>

          <div>
            <Card style={{ top: 100, width: 500 }}>
              <Meta title={product.name} />
              <br></br>
              <Rate allowHalf defaultValue={2.5} />
              <br></br>
              <Meta title={product.description} /> <br></br>
              <Meta description={product.details} /> <br></br>
              <ul>
                {product.features?.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <Meta title={product.price} />
              <br></br>
              <InputNumber min={1} max={10} defaultValue={1} />
              <Button className="buttonStyle">Add to Cart</Button>
            </Card>
          </div>
        </div>
      );
    } else {
      return <div>404 Product not found</div>;
    }
  }

  render() {
    const params = window.location.href.split("/");
    const productId = params[params.length - 1];
    const product = productData.find((product) => product.id === productId);
    return (
      <div>
        <Row justify="space-around">{this.renderDetails(product)} </Row>
      </div>
    );
  }
}

export default ProductDetails;
