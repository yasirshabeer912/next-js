import { addPost } from '@/libs/actions'
import React from 'react'


const ServerActionTests = () => {
  return (
    <div>
        <form action={addPost}>
           <input type="text" name='title' placeholder='Your Name'/>
           <input type="text" name='description' placeholder='Your description'/>
           <input type="text" name='slug' placeholder='Your slug'/>
           <input type="text" name='userId' placeholder='Your userId'/>
           <button>Submit</button>
        </form>
    </div>
  )
}

export default ServerActionTests