import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'

import './styles/main.css'
import './styles/modal.css'

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

const App = () =>
  <div className="app">
    <header className="app__header">
      <h1 className="app__header__title">
        Providers
      </h1>
      <div className="app__header__user">
        Admin
      </div>
    </header>
    <main className="page">
      <header className="page__header">
        <h2 className="page__header__title">
          Current Providers
        </h2>

        <ModalWrap />

      </header>
      <div className="providers">
        {/*
          <p className="provider--nope">
            You haven't selected any providers. <br />Click the Add Provider button to start your list!
          </p>
        */}
        <ul className="providers__list">

          <li className="provider">
            <h3 className="provider__name">
              Provider Name, MD
            </h3>
            <ul className="tasks">
              <li className="task">
                <span className="task__name">Task1</span>
                <span className="task__priority">
                  1
                </span>
              </li>
            </ul>
          </li>

          <li className="provider">
            <h3 className="provider__name">
              Provider Name, MD
            </h3>
            <ul className="tasks">
              <li className="task">
                <span className="task__name">Task1</span>
                <span className="task__priority">
                  1
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task2</span>
                <span className="task__priority">
                  2
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task3</span>
                <span className="task__priority">
                  3
                </span>
              </li>
            </ul>
          </li>

          <li className="provider">
            <h3 className="provider__name">
              Provider Name Longer, MD
            </h3>
            <ul className="tasks">
              <li className="task">
                <span className="task__name">Task1</span>
                <span className="task__priority">
                  2
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task2</span>
                <span className="task__priority">
                  3
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task3</span>
                <span className="task__priority">
                  4
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task4</span>
                <span className="task__priority">
                  5
                </span>
              </li>
            </ul>
          </li>

          <li className="provider">
            <h3 className="provider__name">
              Provider Name, MD
            </h3>
            <ul className="tasks">
              <li className="task">
                <span className="task__name">Task1</span>
                <span className="task__priority">
                  1
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task2</span>
                <span className="task__priority">
                  2
                </span>
              </li>
              <li className="task">
                <span className="task__name">Task3</span>
                <span className="task__priority">
                  3
                </span>
              </li>
            </ul>
          </li>


        </ul>

      </div>
    </main>
  </div>

export default App
