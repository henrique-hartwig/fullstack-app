import { createContext, useState } from "react";


export const TaskContext = createContext();

export const TaskContextProvider = ({children}) => {
    
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <TaskContext.Provider value={{selectedTask, setSelectedTask}}>
        {children}
    </TaskContext.Provider>
  );
};
