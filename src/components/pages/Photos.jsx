import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Carousel from 'react-bootstrap/Carousel'
// import Modal from 'react-bootstrap/Modal'
import PageMeta from '../../utils/PageMeta';
import PageTitle from '../PageTitle';
// import Photo from '../Photo';
import PhotoAlt from '../PhotoAlt';
import styles from './Photos.module.scss';

import { SRLWrapper } from "simple-react-lightbox";

// const Photos = (props) => {
function Photos(props) {
  const name="Photos";

  // const [show, setShow] = React.useState(false);
  // const [index, setActiveIndex] = React.useState(0);
  // const handleClose = () => setShow(false);
  // const handleShow = (idx) => {
  //   setShow(true);
  //   // setActiveIndex(idx);
  // }
  // console.log(props.slides);
  

  // const [images, setImages] = React.useState(null);
  // setImages(
  //   {props.slides.map((slide, index) => (
  //     original: `img/${slide.photo}`,
  //     thumbnail: `${url}=w100`
  //   ))}
  // );

  // const images = [
  //   {
  //     original: 'img/lydia-brutvan-200im-2018.jpg',
  //     thumbnail: 'lydia-brutvan-200im-2018-thumb.jpg',
  //   },
  //   {
  //     original: 'lydia-brutvan-third-place.jpg',
  //     thumbnail: 'lydia-brutvan-third-place-thumb.jpg',
  //   },
  // ];
  const options = {
    // settings: {},
    caption: {
      captionAlignment: 'left'
    },
    buttons: {},
    thumbnails: {},
    progressBar:{
      showProgressBar: 'false'
    }
  }

  return (
    <div>
      <PageMeta pageTitle="Lydia Brutvan | Photo Resume" />
      <PageTitle pagetitle={name} styles={styles} />
      
      <Container>
        <Row>
          <Col sm={12} md={12} lg={{span: 9, offset: 3}}>
            <h2 className="removeit">Photo Resume</h2>
          </Col>
        </Row>
      </Container>

      <SRLWrapper options={options}>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={{span: 9, offset: 3}} className={styles.wrapper}>
            {props.slides.map((slide, index) => (
                // <PhotoAlt slide={slide} callback={handleShow} idx={index} />
                <PhotoAlt slide={slide} idx={index} />
            ))}
          </Col>
        </Row>
      </Container>
      </SRLWrapper>
      
      {/* <Modal 
        show={show} 
        onHide={handleClose}
        size="xl"
        animation={false}
        centered
        className="themodal">
        <Modal.Body>
          <Carousel
            fade={true}
            activeIndex={index}
            >
            {props.slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <img
                  // className="d-block w-100"
                  src={'img/' + slide.photo}
                  alt={slide.title}
                  className={styles.large}
                />
                <Carousel.Caption className={styles.caroselCaption}>
                  <h3>{slide.title}</h3>
                  <p>{slide.blurb}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal> */}
      

      {/* <Popup trigger={<button> Trigger</button>} modal>
        <div>Popup content here !!</div>
      </Popup> */}
    </div>
  );
};

export default Photos