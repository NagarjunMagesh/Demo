import React, { useState } from 'react'

function Hooks() {
    const [count, setcount] = useState(0)
    const [show, setshow] = useState(false)
    const[name,setName]=useState("")
    return (
        <div className='container'>
            <button className='btn btn-sm btn-outline-dark mx-2' onClick={() => setcount(count - 1)} disabled={count <= 0}>-</button>
            {count}
            <button className='btn btn-sm btn-outline-success mx-2' onClick={() => setcount(count + 1)} disabled={count >= 10}>+</button>
            <div className='container my-3'>

                <h2> heading <span className={show ? 'fs-6 text-danger' : 'fs-6 text-primary'} onClick={() => setshow(!show)}> {show ? "hide" : "show"}</span></h2>

                {
                    show ? <p>
                        Line 43:37:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot
                        provide a valid href, but still need the element to resembl
                    </p> : ""
                }


            </div>
            <div className="container">
                {
                    name
                }
                <label>
                    name
                </label>
                <div>
                    <input onChange={(event)=>setName(event.target.value)}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Hooks