import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import '../styles/modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.selectedOption = React.createRef()
  }
  handleAddItem() {
    // this.props.onAdd(this.selectedOption.current.value)
    this.props.onClose()
  }
  render() {
    const {
      handleAddItem,
      props: {
        allItems,
        onClose,
      },
      selectedOption,
    } = this

    return createPortal(
      <aside className="modal__cover">
        <div className="modal">
          <header className="modal__header">
            <h3 className="modal__header__title">
              Add Provider
            </h3>
            <span
              className="modal__header__close"
              onClick={ onClose }
            >
              &times;
            </span>
          </header>
          <div className="modal__content">
            <label
              className="modal__content__label"  htmlFor="provider-search"
            >
              Search providers
            </label>
            <select
              className="modal__content__select"
              id="provider-search"
            >
              <option>Provider 1</option>
              <option>Provider 2</option>
              <option>Provider 3</option>
            </select>
          </div>

          <footer className="modal__footer">
            <button
              className="modal__footer__btn"
              onClick={ handleAddItem }
            >
              Add
            </button>
          </footer>
        </div>
      </aside>,
      document.body
    )
  }
}

class ModalWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.onClose = this.onClose.bind(this)
    this.onOpen = this.onOpen.bind(this)
  }
  onClose() {
    this.setState({ isOpen: false })
  }
  onOpen() {
    this.setState({ isOpen: true })
  }
  render() {
    const {
      onClose,
      onOpen,
      state: {
        isOpen
      }
    } = this

    return (
      <Fragment>
        <button
          className="modal__trigger"
          onClick={ onOpen }
        >
          Add Provider
        </button>

        { isOpen &&
          <Modal
            onClose={ onClose }
          />
        }
      </Fragment>
    )
  }
}

export default ModalWrap
