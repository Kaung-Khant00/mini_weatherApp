import React, { useContext, useRef } from 'react'
import { Context } from '../Context';

export default function Input() {
    const {postData} = useContext(Context);
    function hundlePost(e){
        e.preventDefault();
        postData({task:inputRef.current.value});
        inputRef.current.value="";
    }
    const inputRef = useRef("")
return (
    <form className='d-flex row mb-4' onSubmit={hundlePost}>
        <div className=' col-lg-10 col-9'>
            <input ref={inputRef} type="text" className='form-control' />
        </div>
            <button className='btn btn-primary col-lg-2 col-3'><i className="fa-solid fa-plus"></i>Add</button>
    </form>
)
}
