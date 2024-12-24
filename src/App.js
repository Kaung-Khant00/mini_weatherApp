import Input from "./components/Input";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { api } from "./api";
import { Context } from "./Context";
 

export default function App() {

  const [tasks, setTasks] = useState([]);
  async function fetchData() {
    const res = await api.get("/todolist");
    console.log(res)
    setTasks([...res.data]);
  }
  async function postData({task}) {
    console.log(task)
    if(task.length>0){
    const taskObj={
      id:crypto.randomUUID(),
      task:task,
      completed:false
    }
    await api.post("/todolist", taskObj);
    fetchData()
  }
  }
  async function patchData(id){
    console.log(id)
    await api.patch(`/todolist/${id}`,{completed:true});
    fetchData()
  }
  async function deleteData(id){
    await api.delete(`/todolist/${id}`);
    fetchData()
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Context.Provider value={{deleteData,postData,patchData}}>
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="container border border-gray p-5 shadow-sm rounded bg-white">
      <Input />
      <Cart tasks={tasks} />
      </div>
    </div>
    </Context.Provider>
  );
}
