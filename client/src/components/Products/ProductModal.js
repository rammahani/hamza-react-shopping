import React from 'react';
import Modal from 'react-modal';

function ProductModal(props) {
  const { product, closeModal } = props;
  return (
    <Modal
      isOpen={product}
      onRequestClose={closeModal}
      className='details-modal'
    >
      <span onClick={closeModal}>&times; </span>
      <div className='product-info'>
        <img src={product.imageUrl} alt='hi man' />
        <p>{product.title}</p>
        <p>{product.desc}</p>
      </div>
    </Modal>
  );
}
export default ProductModal;
