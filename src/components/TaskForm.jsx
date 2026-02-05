import React, { useState } from "react";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "medium",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const Errors = {};

    if (!formData.title.trim()) {
      Errors.title = "Title is required.";
    } else if (formData.title.length > 6) {
      Errors.title = "Maximum 6 characters allowed.";
    }

    if (!formData.description.trim()) {
      Errors.description = "Description is required.";
    }

    if (!formData.date) {
      Errors.date = "Date is required.";
    }

   

    setErrors(Errors);
    return Object.keys(Errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
    setErrors({
        ...errors,
        [e.target.name] : ""
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Task Added Successfully ✅");
      console.log(formData);

      setFormData({
        title: "",
        description: "",
        date: "",
        priority: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="add-task-card">
      <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>
      

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && (
            <span className="error-msg">{errors.description}</span>
          )}
        </div>

        {/* Date & Priority */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            {errors.date && <span className="error-msg">{errors.date}</span>}
          </div>

          <div style={{ flex: 1 }}>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            {errors.priority && (
              <span className="error-msg">{errors.priority}</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div
          className="form-actions"
          style={{ display: "flex", gap: "10px", marginTop: "10px" }}
        >
          <button type="submit" className="btn-primary" style={{ flex: 1 }}>
            Add Task
          </button>
          <button
            type="reset"
            className="btn-secondary"
            style={{ flex: 1 }}
            onClick={() =>
              setFormData({
                title: "",
                description: "",
                date: "",
                priority: "",
              })
            }
          >
            Clean
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
