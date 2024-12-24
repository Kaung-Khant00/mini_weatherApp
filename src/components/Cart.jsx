import List from "./List";

export default function Cart({tasks}) {
  return (
    <div>
        <ul className='list-group gap-2'>
          {tasks.length===0 && <h4 className='text-center text-secondary'>You have nothing to do !</h4>}
{tasks?.map((task, index) => (<List key={index} task={task} />))}
        </ul>
    </div>
  )
}
