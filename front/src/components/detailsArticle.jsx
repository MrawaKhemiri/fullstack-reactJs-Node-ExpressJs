import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import '../css/creerArticle.css'


export default function Detailsarticle() {
    const [article, setArticle]=useState({})
    const [loading, setLoading] = useState(false) 
    const location=useParams()
    console.log(location.id);

    async function fetchDetailArticle(){
      await axios.get("http://localhost:8080/article/"+location.id)
       .then(response=>response.data)
        .then(res => {
            setArticle(res.article)
            setLoading(true)
        })
    }


    useEffect(()=>{fetchDetailArticle()},[])

   
 
  
return (
  <div className="back">
   {loading?
   <div>
      <h2>{article.title}</h2>
        <div className="courses-container">
            <div className="course">

                <div className="course-info">
					<span>{article.postedAt}</span> <span>{article.category.title}</span> 
                    
                </div>
            </div>
        </div> 
       
   </div>
   
   :null}
      
	
    </div>
    
    
  )
}

  
  
  
  
  
