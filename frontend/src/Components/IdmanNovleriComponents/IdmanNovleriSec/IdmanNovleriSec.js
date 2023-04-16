import React from 'react'
import "./IdmanNovleriSec.scss"
import vlbicon from "../../../Imgs/volleyball-icon.png";

function IdmanNovleriSec() {
  return (
    <section className='idmannovlerisec'>
        <div className='idmannov_sec_card'>
            <div className='nov_card'>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p>Valeybol</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p>Valeybol</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p>Valeybol</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p>Valeybol</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p>Valeybol</p>
                </div>
               

            </div>
        </div>
    </section>
  )
}

export default IdmanNovleriSec