import React, { Component } from 'react'

import ModalWrap from './components/ModalWrap.jsx'

import './styles/variables.css'
import './styles/main.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      allProviders: [], // available?
      selectedProviders: [], // current?
    }
    this.handleAddProvider = this.handleAddProvider.bind(this)
  }
  componentDidMount() {
    this.getDoctors()
  }
  getDoctors() {
    fetch(`https://testapi.io/api/akirayoglu/0/reference/getDoctors`)
      .then(res => res.json())
      .then(result => {
        console.log('result', result)
        this.setState({
          allProviders: result
        })
      }
    )
  }
  handleAddProvider(providerId) {
    console.log('handleAddProvider', providerId)

    const selectedProvider = this.state.allProviders.find(p =>
      p.doctor_id === providerId)

    const available = this.state.allProviders.filter(a =>
      a.doctor_id !== providerId)

    this.setState({
      allProviders: available,
      selectedProviders: this.state.selectedProviders.concat(selectedProvider),
    })

  }
  render() {
    const {
      handleAddProvider,
      state: {
        allProviders,
        selectedProviders,
      }
    } = this

    return (
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
            <ModalWrap
              allProviders={ allProviders }
              onAddProvider={ handleAddProvider }
            />
          </header>
          <div className="providers">
            {/*
              <p className="provider--nope">
                You haven't selected any providers. <br />Click the Add Provider button to start your list!
              </p>
            */}
            <ul className="providers__list">

              { selectedProviders.map(sel =>
                <li className="provider" key={ sel.doctor_id }>

                  <h3 className="provider__name">
                    { sel.first_name }&nbsp;{ sel.last_name },&nbsp;{ sel.degree }
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
              )}

              {/* <li className="provider">
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
              </li> */}


            </ul>

          </div>
        </main>
      </div>
    )
  }
}

export default App
