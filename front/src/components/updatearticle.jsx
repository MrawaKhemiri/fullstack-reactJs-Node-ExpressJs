import React from 'react'
import axios from 'axios'
import { Button, Form} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import '../css/creerArticle.css'


export default function UpdateArticle() {
    const [article, setArticle]=useState({})
    const [categories, setCategories]=useState([])
    const [inputTitle,setInputTitle]=useState("")
    const [inputText,setInputText]=useState("")
     const [inputCategory,setInputCategory]=useState("")
    const location=useParams()
    console.log(location.id);

    async function fetchArticle(){
      await axios.get("http://localhost:8080/update/"+location.id)
       .then(response=>response.data)
        .then(res => {
            setArticle(res.article)
            setCategories(res.categories)
        })
    }

   async function postUpdate(e)
   {
      e.preventDefault()
        let newarticle={
          title:inputTitle,
          content:inputText,
          category:inputCategory,
        }
        
      await axios.post(`http://localhost:8080/update/${location.id}`, newarticle)
       .then(response => {console.log(response.data);
          window.location.href='/'
          console.log('Article ajouté')
      })
   }

  
    useEffect(()=>{fetchArticle()},[])
   console.log(article);
return (
    <div className="back">
       <section className="container">
           <h1>Update Article</h1>
           
    <Form onSubmit={(e)=>postUpdate(e)} className="form-style-9">
      
        <Form.Select id="disabledSelect" className='select' name="category" onChange={(e)=>setInputCategory(e.target.value)}>

            {categories.map((category) =>{
  
                if (category._id == article.category._id) {
                  return <option value={category._id } selected > {category.title }</option>
                }
                return <option value={category._id }>{category.title }</option>

              })} 
        </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='field-style field-split align-left' placeholder="Enter Title"name='title' defaultValue={article.title} onChange={(e)=>setInputTitle(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" placeholder='Enter Text'>
        <Form.Control as="textarea" className='field-style' rows={3} name='content' defaultValue={article.content} onChange={(e)=>setInputText(e.target.value)}/>
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
      </Form>
     </section>
    </div>
  )
}

  
  
  
  
  
