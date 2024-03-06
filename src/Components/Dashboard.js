import React from 'react'

function Dashboard(nameData) {

    const data = [
        {
            name: "waring card",
            color: "primary",


        },
        {
            name: "success card",
            color: "success",
        },
        {
            name: "info card",
            color: "info",
        },
        {
            name: "danger card",
            color: "danger"
        },
        {
            name: "danger card",
            color: "danger"
        },







    ]
    return (
        <div className='container '>
            <div className='row'>
                {
                    data.map((list) => {
                        return <div className='col-3'>
                            <div class={`card bg-${list.color}`}>
                                <h5 class="card-header"></h5>
                                <div class="card-body">
                                    <h5 class="card-title">{list.name}</h5>
                                    
                                    <a href="#" class="btn btn-primary">Go Link</a>
                                </div>
                            </div>

                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default Dashboard