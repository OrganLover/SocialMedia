const Modal = ({ modalOpened, setModalOpened, children }) => {
  return (
    <div className='modal' onClick={() => setModalOpened(!modalOpened)}>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>
        <span
          className='modalCloseButton'
          onClick={() => setModalOpened(!modalOpened)}
        >
          x
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
