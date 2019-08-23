import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'

import Modal from './Modal.jsx'

import '../styles/modal.css'

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
      props: {
        allProviders,
        onAddProvider
      },
      state: {
        isOpen
      }
    } = this

    return (
      <Fragment>
        <button
          className="modal__trigger"
          disabled={ !allProviders.length }
          onClick={ onOpen }
        >
          Add Provider
        </button>

        { isOpen &&
          <Modal
            allProviders={ allProviders }
            onAddProvider={ onAddProvider }
            onClose={ onClose }
          />
        }
      </Fragment>
    )
  }
}

export default ModalWrap
