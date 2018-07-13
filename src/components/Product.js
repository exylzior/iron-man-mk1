import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Button } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class EcommercePage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      length: 3,
      slide: true
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.length) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.length });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    const { activeItem, length, slide } = this.state;
    return(
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Carousel
            multiItem
            slide={this.state.slide}
            activeItem={this.state.activeItem}
            next={this.next}>
            <div className="controls-top">
              <CarouselControl iconLeft className="btn-floating" direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl iconRight className="btn-floating" direction="next" role="button" onClick={() => { this.next(); }} />
            </div>
            <CarouselInner>
              <Row>
                <CarouselItem itemId="1">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <Col md="4">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shoes</h5>
                        </a>
                        <CardTitle><strong><a href="">Leather boots</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">69$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Jeans</h5>
                        </a>
                        <CardTitle><strong><a href="">Slim jeans</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">99$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4" className="clearfix d-none d-md-block">
                    <Card narrow ecommerce className="mb-2">
                      <CardImage cascade top src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg" alt="sample photo"/>
                      <CardBody cascade>
                        <a href="" className="text-muted">
                          <h5>Shorts</h5>
                        </a>
                        <CardTitle><strong><a href="">Denim shorts</a></strong></CardTitle>
                        <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</CardText>
                        <CardFooter className="px-1">
                          <span className="float-left">49$</span>
                          <span className="float-right">
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
                            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                          </span>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </CarouselItem>
              </Row>
            </CarouselInner>
          </Carousel>
        </section>
      </Container>
    );
  };
}

export default EcommercePage;