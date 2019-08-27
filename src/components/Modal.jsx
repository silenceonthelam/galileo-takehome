import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'

// NOTE: In actual app, content would not be tightly-coupled to modal
class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleAddProvider = this.handleAddProvider.bind(this)
    this.selectedOption = React.createRef()
  }
  handleAddProvider() {
    this.props.onAddProvider(this.selectedOption.current.value)
    this.props.onClose()
  }
  render() {
    const {
      handleAddProvider,
      props: {
        allProviders,
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
              ref={ selectedOption }
            >
              { allProviders.map(provider =>
                <option
                  className="selection__option"
                  key={ provider.doctor_id }
                  value={ provider.doctor_id }
                >
                  { provider.first_name }&nbsp;
                  { provider.last_name },&nbsp;
                  { provider.degree }
                </option>
              )}
            </select>
          </div>
          <footer className="modal__footer">
            <button
              className="modal__footer__btn"
              onClick={ handleAddProvider }
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

export default Modal
