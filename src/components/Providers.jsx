import React from 'react'

import '../styles/providers.css'

const Providers = ({
  selectedProviders,
  tasks
}) =>
  <div className="providers">
    { !selectedProviders.length ?
      <p className="provider--nope">
        You haven't selected any providers. <br />
        Click the Add Provider button to start your list!
      </p>
      :
      <ul className="providers__list">
        { selectedProviders.map(sel =>
          <li className="provider" key={ sel.doctor_id }>

            <h3 className="provider__name">
              { sel.first_name }&nbsp;{ sel.last_name },&nbsp;{ sel.degree }
            </h3>

            { !tasks[sel.doctor_id].length ?
              <p className="tasks--nope">
                No available tasks <br />
                for this provider.
              </p>
              :
              <ul className="tasks">
                { tasks[sel.doctor_id].map(task =>
                  <li
                    className={ `task priority-${task.priority}` }
                    key={ task.task_id }
                  >
                    <span className="task__name">
                      { task.task_id }
                    </span>
                    <span
                      className={ `task__priority priority-${task.priority}` }
                      title={ `Priority-${task.priority}` }
                    >
                      { task.priority }
                    </span>
                  </li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>
    }
  </div>

export default Providers
