import React from 'react'


const AppLayout = (props : {
  children: React.ReactNode[]
}) => {
  return (
    <div className='w-[100vw] h-[100vh] grid grid-cols-8'>
      <div className='col-span-2'>
        { props.children[0] }
      </div>      
      <div className='col-span-6'>
        { props.children[1] }
      </div>
    </div>
  )
}


export default AppLayout


