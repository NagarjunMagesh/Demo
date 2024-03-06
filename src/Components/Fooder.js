import React from 'react'

function Fooder() {
    const data=[
        {

            name:"free",
            money:"$0",
            user:"single user",
            stroage:"5 GB stroage",
            free:"free subdomin",
        },
        {

            name:"plus",
            money:"$9",
            user:"5 user",
            stroage:"50 GB stroage",
          
        },
        {

            name:"bro",
            money:"$49",
            user:"unlimited user",
            stroage:"150 GB stroage",
         
            


            

        },
    ]
  return (
   <div>

<section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
        data.map((list)=>{
            return <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{list.name}</h5>
                <h6 class="card-price text-center">{list.money}<span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.name==="free"?list.user: <b>{list.user}</b>}</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.stroage}</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                  <li class={list.name === "free"? "text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>Unlimited
                    Private Projects</li>
                  <li class={list.name==="free"?"text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>Dedicated
                    Phone Support</li>
                  <li class={list.name==="free"?"text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>{list.name==="bro"?<b>unlimited</b>:""}free subdomin
                  </li>
                  <li class={list.name==="bro"?"":"text-muted"}><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        })
      }
     
      
      
    
    </div>
  </div>
</section>   
   </div>
  )
}

export default Fooder