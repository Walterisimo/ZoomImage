import React, { useEffect, useRef } from 'react';
import useOnScreen from '../Hooks/OnScreen';


function Sections ( {id} ){

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if(isVisible) {
      document.querySelector(`#${id}`).classList.add('active')
    } else {
      if(document.querySelector(`#${id}`).classList.contains('active')){
        document.querySelector(`#${id}`).classList.remove('active')
      }
    }
  }, [isVisible])


  return(
    <section className='content d-flex align-items-center' id={id}>
      <div className='container'>
        <div className='row' ref={ref}>
          <div className='col-md-3'>
            <div className='overflow-hidden'><img className='image' src='https://picsum.photos/seed/picsum/200/300' /></div>
          </div>
          <div className='col-md-3'>
            <div className='overflow-hidden'><img className='image' src='https://picsum.photos/seed/picsum/200/300' /></div>
          </div>
          <div className='col-md-3'>
            <div className='overflow-hidden'><img className='image' src='https://picsum.photos/seed/picsum/200/300' /></div>
          </div>
          <div className='col-md-3'>
            <div className='overflow-hidden'><img className='image' src='https://picsum.photos/seed/picsum/200/300' /></div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sections
