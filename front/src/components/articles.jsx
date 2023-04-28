import React, { useState } from "react";
import axios from  "axios";
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import '../css/article.css'
function Affichearticle() {
  const [categories, setCategories] = useState([])
  const  [articles, setArticles] = useState([])
  
      async function getArticles (){
        await axios.get("http://localhost:8080/showArticles")
        .then(response=>response.data)
        .then(res => {
            setArticles(res.produits)
            setCategories(res.categories)
            //setLoading(true)
        })
    }
    useEffect(()=> {
        getArticles()
    }, [])

    async function del(id){
      await axios.delete(`http://localhost:8080/delete/${id}`)
      .then(res => {
        console.log('deleted',res)
       window.location.href='/'
       })
    }

  return ( <div className="back">
    
    <section className="container">
         <h1>Home Page</h1>
         
              <div className="flex">
                <Link to="/create" className="btn"> Create article</Link>
                  
                <Link to="" className="btn"> Create category</Link>
              </div>
           
    {articles.map((art)=>
                <div className="courses-container" >
                  <div className="course">
                   <div className="course-preview">
                        <span>
                           {art.postedAt}
                        </span> 
                        <span> </span>
                        <span>
                            {art.category.title}
                        </span>
                        <h4> <Link to={`/article/${art._id}`}>
                               {art.title}
                           </Link>  </h4>
                    </div>
                     <div class="course-info">
                        <p>
                            {art.content.substr(0,50)}
                        </p>
                       
                         <button className="btn"><Link to={`/update/${art._id}`}>update</Link></button>
                        <button className="btn" onClick={ () => del(art._id)} >delete</button>
                       
                    </div>
                    </div>

                    
                </div>)}
            </section>


  </div>
   )
  
  };

export default Affichearticle