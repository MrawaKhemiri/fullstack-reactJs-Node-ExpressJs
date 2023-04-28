import axios from "axios"
import { useState, useEffect } from "react"
import '../css/creerArticle.css'
function Addarticle() {
    // Afficher les categories de la table
    const [categorieAll, setCategoriesALL] = useState([])
    const [title, settitle] = useState("")
    const [categories, setcategories] = useState("")
    const [message, setmessage] = useState("")
    
    async function getArticles (){
        await axios.get("http://localhost:8080/showArticles")
        .then(response=>response.data.categories)
        .then(res => {
            setCategoriesALL(res) 
        })
    }
    useEffect(()=> {
        getArticles()
    }, [])
 
  let article = {
    title: title,
    content: message,
    category: categories,
   
  }
  async function Ajoutarticle(e) {
     e.preventDefault()
    console.log(article)
    await axios.post('http://localhost:8080/create', article)
    .then(res=>{
        window.location.href='/'
        console.log('Article ajouté')
    })
    
  }
  
  return (
  <div className="back">
  <section className="container">
      <h1 className="">Create new article</h1>
      
      <form method="post" className="form-style-9">
        <select name="categories" onChange={(e) => setcategories(e.target.value)} value={categories} >
          {categorieAll.map((item) =>
          <option value={item._id} > {item.title}</option>
        )}  
        </select>
        <input type="text" name="title" className="field-style field-split align-left" value={title} onChange={(e) => settitle(e.target.value)} />
        <div>
          <textarea name="message" className="field-style" cols="80" rows="5" placeholder="Message" value={message} onChange={(e) => setmessage(e.target.value)}  ></textarea>
          <button type="submit" className="btn btn-primary"  onClick={(e)=>Ajoutarticle(e)} > submit</button>
        </div>
      </form> 
  
  </section>
  </div>
  );
} 

export default Addarticle;







