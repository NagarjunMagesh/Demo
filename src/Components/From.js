import React, { useState } from 'react'
import Select from 'react-select'

function From() {
    const [student, setstudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        location: "",
    })

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        setstudent({ ...student, [event.target.name]: event.target.value })
    }
    const onSubmit = () => {
        if (student.firstName === "") {
            return alert("firstName Required")
        }
        if (student.firstName.length < 3) {
            return alert("firstName should be at least 3 characters")
        }
        if (student.lastName === "") {
            return alert("lastName Required")
        }
        if (student.email === "") {
            return alert("email Required")
        }
        if (student.password === "") {
            return alert("password Required")
        }
        if (student.location === "") {
            return alert("location Required")
        }
        console.log(student)
    }

    return (

        <div className='container'>

            <h2>create data</h2>
            <div className='row'>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">FirstName</label>
                        <input type="text" class="form-control" onChange={(event) => handleChange(event)} />

                    </div>
                </div>
                <div className='col-6'>
                <div class="mb-3">
                        <label class="form-label">LastName</label>
                        <input type="text" class="form-control" onChange={(event) => handleChange(event)} />

                    </div>
                </div>
                <div className='col-6'>

                    <label class="form-label">email</label>
                    <input type="emil" name='email' class="form-control" onChange={(event) => handleChange(event)} />

                </div>
                <div className='col-6 '>

                    <label class="form-label">password</label>
                    <input type="password" name='password' class="form-control" onChange={(event) => handleChange(event)} />

                </div>
                <div className='col-6'>

                    <label class="form-label">location</label>
                    <input type="location" name='location' class="form-control" onChange={(event) => handleChange(event)} />

                </div>
                <div className='col-6'>

                    <label class="form-label">Hobby</label>
                    <Select />
                </div>






            </div>
            <div className='text-end my-3'>
                < button className='btn btn-sm btn-outline btn-info mx-4' onClick={() => onSubmit()}>submit</button>
            </div>


        </div>


    )
}

export default From