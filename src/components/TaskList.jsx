 const TaskList = () => {
      return (
        <div className="Tssk-grid">
            {/* Task Card 1 */}
            <div className="Task-card" style={ {position: 'relative'}}>
                <h3>complete task manager UI styling</h3>
                <p>Finish task manager UI and styling</p>

                <div className="task-meta">
                    <span>Due: 2026-02-10</span>
                    <span className="priority-badge priority-high"></span>
                </div>

                <div className="task-actions">
                    <button
                    className="btn-icon"
                    style={{background: '#00d2ff'}}
                    title="Edit Task">

                        🖊

                    </button>

                    <button
                    className="btn-icon"
                    style={{background: '#00b894'}}
                    title="Mark complete">
                        
                    ✔
                    </button>

                    <button
                    className="btn-icon"
                    style={{background: '#ff416c'}}
                    title="Delete Task">

                        🧺

                    </button>


                </div>
            </div>
          
        </div>
      )
    }
    
 export default TaskList;