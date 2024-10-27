import React, { useEffect, useState } from 'react'
import Heade from '../componentes/Heade'
import './Home.css'
import { blogFecth } from '../axios/axios'
import { Link } from 'react-router-dom'

function Home() {

  const [posts,setPosts] = useState([])

  const getPosts = async() =>{
    
    try {
      const response = await blogFecth.get('/posts')
      const n = response.data
      setPosts(n)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
      getPosts()
  },[])

  return (
    <div className='home'>
      <Heade/>
    <div className="container">
      <h1>Últimos post</h1>
    {posts.length === 0 ? <p>carregando</p> : (
      posts.map((post)=>(
        <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link className='btn' to={`/posts/${post.id}`}>Ler mais</Link>
        </div>
      ))
    )}
        
        </div>  
    </div>
    
  )
}
  
export default Home