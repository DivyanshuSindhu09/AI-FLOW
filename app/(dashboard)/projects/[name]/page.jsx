import React from 'react'

const page = ({params}) => {
    console.log(params)
//     Promise {
//   { name: 'divyanshu' },
//   name: 'divyanshu',
//   Symbol(async_id_symbol): 757667,
//   Symbol(trigger_async_id_symbol): 757666

  return (
    <div>Welcome to {params.name.toUpperCase()}'s Project</div>
  )
}

export default page