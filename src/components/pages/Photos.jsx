import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import PageMeta from '../../utils/PageMeta';
import PageTitle from '../PageTitle';
// import Photo from '../Photo';
import PhotoAlt from '../PhotoAlt';
import styles from './Photos.module.scss';

// import Popup from 'reactjs-popup';

// const Photos = (props) => {
function Photos(props) {
  const name="Photos";

  const [show, setShow] = React.useState(false);
  const [index, setActiveIndex] = React.useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (idx) => {
    setShow(true);
    setActiveIndex(idx);
  }
  // console.log(props.slides);

  return (
    <div>
      <PageMeta pageTitle="Lydia Brutvan | Photo Resume" />
      <PageTitle pagetitle={name} styles={styles} />

      <Container className={styles.wrapper}>
      {props.slides.map((slide, index) => (
          <PhotoAlt slide={slide} callback={handleShow} idx={index} />
      ))}
      </Container>
      
      <Modal 
        show={show} 
        onHide={handleClose}
        size="xl"
        animation={false}
        centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
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
      </Modal>
      

      {/* <Popup trigger={<button> Trigger</button>} modal>
        <div>Popup content here !!</div>
      </Popup> */}
    </div>
  );
};

export default Photos