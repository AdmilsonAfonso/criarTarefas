import React, { useState } from 'react'
import Heade from '../componentes/Heade'
import './NewPost.css'
import { blogFecth } from '../axios/axios'
import { useNavigate } from 'react-router-dom'


function NewPost() {

  const navigate = useNavigate()

  const[title,setTitle] = useState()
  const[body,setBody] = useState()
  
  const createPost = async(e) =>{
      e.preventDefault()

      const post = {title,body,userId:1}

      await blogFecth.post('posts',{
        body: post
      })

       navigate('/')
      
  }

  return (
    <div className='new-post'>
        <Heade/>
        <h2>Inserir novo Post:</h2>
        <form onSubmit={(e) =>createPost(e)}>
          <div className="form-control">
            
            <label htmlFor="title">Títulos</label>
            <input type="text" 
            placeholder='Digite o titulo' 
            name="" id=""
            onChange={(e)=>setTitle(e.target.value)} />

          </div>
          <div className="form-control">
            
            <label htmlFor="body">Conteúdos</label>
            <textarea placeholder='Digite o conteúdo' 
            name="" id="" onChange={(e)=>setBody(e.target.value)}></textarea>
          </div>
          <button className='btn' type='submit'>Criar post</button>
        </form>
    </div>
  )
}

export default NewPost