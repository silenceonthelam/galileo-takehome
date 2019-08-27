import React, { Component } from 'react'

import ModalWrap from './components/ModalWrap.jsx'
import Providers from './components/Providers.jsx'

import './styles/variables.css'
import './styles/main.css'

const BASE_API_URI = `https://testapi.io/api/akirayoglu/0/`

function getTasks(providerId) {
  return fetch(`${BASE_API_URI}tasks/${providerId}`)
    .then(res => res.json())
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      allProviders: [],
      selectedProviders: [],
      tasks: {},
    }
    this.handleAddProvider = this.handleAddProvider.bind(this)
  }
  componentDidMount() {
    // NOTE: For the purposes of this demo, just calling this once
    this.getDoctors()
  }
  getDoctors() {
    // NOTE: For actual app, would also have error handling
    fetch(`${BASE_API_URI}reference/getDoctors`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          allProviders: result
        })
      }
    )
  }
  async handleAddProvider(providerId) {
    const selectedProvider = this.state.allProviders.find(p =>
      p.doctor_id === providerId)

    const available = this.state.allProviders.filter(a =>
      a.doctor_id !== providerId)

    const tasks = await getTasks(providerId)

    const newTasks = {
      ...this.state.tasks,
      [providerId]: tasks
    }

    this.setState({
      allProviders: available,
      selectedProviders: this.state.selectedProviders.concat(selectedProvider),
      tasks: newTasks
    })
  }
  render() {
    const {
      handleAddProvider,
      state: {
        allProviders,
        selectedProviders,
        tasks,
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

          <Providers
            selectedProviders={ selectedProviders }
            tasks={ tasks }
          />
        </main>
      </div>
    )
  }
}

export default App
