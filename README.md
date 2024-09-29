# Task Creator and Task Viewer Application

## Project Overview

This project consists of two parts:

1. **Task Creator (React)**: A React-based application where users can add tasks to a list and manage them.
2. **Task Viewer (Electron)**: An Electron-based application that syncs tasks from the Task Creator app and displays them in a home screen.

## Basic Project Features

### Task Creator (React - `task-creator`)

- **Text Input Field**: A text input field to create a new task.
- **Add Button**: Adds the entered text to the task table.
- **Task Table**: Displays the list of added tasks, each row has a `Sync` button.

### Task Viewer (Electron - `task-viewer`)

- **Home Screen**: Displays the tasks synced from the React app.
- **Create Button**: Opens a window with the React Task Creator app.
- **Sync Button**: Syncs tasks from the React app and displays them in the Electron home screen.

---

## Intermediate Project Plan

The goal is to incrementally evolve this basic application into a more robust intermediate-level project by adding new features and functionalities. Below is the roadmap for the intermediate level.

### 1. **Task Management Enhancements in React (`task-creator`)**

#### 1.1 Task Status Management

- Add a dropdown or radio buttons to manage task status (e.g., **To Do**, **In Progress**, **Done**).
- Store the task status in state or persistent storage.

#### 1.2 Task Prioritization

- Add the ability to set task priority (e.g., **High**, **Medium**, **Low**).
- Show priority in the task table (color coding or tags).

#### 1.3 Due Dates

- Add a date picker to set deadlines for tasks.
- Display the remaining time until a task is due.

#### 1.4 Task Edit & Delete

- Add options to edit or delete tasks from the table.
- Add `edit` and `delete` buttons beside the sync button for each task row.

#### 1.5 Search & Filter

- Add a search bar to filter tasks by name.
- Add filters to display tasks based on status and priority.

### 2. **Sync & Communication Between React and Electron**

#### 2.1 Bidirectional Sync

- Allow syncing tasks from Electron's home screen back to the React task creator when opened again.
- Store tasks in a local file/database in Electron (e.g., JSON or SQLite).

#### 2.2 Real-Time Task Updates

- Implement real-time communication between Electron and React.
- Automatically reflect task changes from React in Electron and vice versa.

#### 2.3 Notification System

- Add desktop notifications (via Electron's Notification API) for task completion or approaching due dates.

#### 2.4 Task Storage in Electron

- Move task storage to Electron’s backend and sync tasks between React (frontend) and Electron (backend).

### 3. **Task Persistence & Offline Support**

#### 3.1 Persistent Data Storage

- Ensure tasks remain available after closing and reopening the Electron app.
- Use Electron’s file system or database to persist tasks.

#### 3.2 Offline Mode

- Implement offline support, caching tasks locally on React and Electron.
- Ensure tasks can be accessed without an internet connection.

### 4. **Dashboard in Electron (`task-viewer`)**

#### 4.1 Dashboard View

- Create a dashboard on the Electron home screen to show task summaries:
  - Task counts by status (To Do, In Progress, Done).
  - Number of overdue or high-priority tasks.

#### 4.2 Data Visualization

- Add charts or visual summaries (e.g., using Chart.js) for task insights.

### 5. **Task History & Logs**

#### 5.1 Task History

- Track task changes (status changes, edits, completions) in a history log.
- Display a task history modal when a task is clicked.

### 6. **Settings & Customization in Electron**

#### 6.1 Settings Menu

- Add settings to customize the Electron app:
  - Toggle between dark and light mode.
  - Enable or disable notifications.
  - Set default task statuses or priorities.

### 7. **Export & Import Tasks**

#### 7.1 Export Tasks

- Allow users to export tasks as a file (CSV/JSON) from Electron's home screen.

#### 7.2 Import Tasks

- Add the ability to import tasks from a CSV or JSON file into the Electron app.

### 8. **Background Sync**

#### 8.1 Background Task Syncing

- Sync tasks in the background between Electron and React apps.
- Implement background sync logic, even when the Electron app is minimized.

---

## Sample Code Snippets

### IPC Communication Example for Syncing Tasks

#### React (`task-creator`)

```js
// React component example for syncing task
window.electronAPI.sendToMain("sync-task", task);

window.electronAPI.receiveFromMain("sync-tasks", (tasks) => {
  setTasks(tasks); // Set tasks in React from Electron
});
```
