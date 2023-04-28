import {Link, Outlet} from 'react-router-dom'

export default function Home () 
{
    return (
        <div>
            <nav style={{display:'flex', justifyContent:'space-around', width:'100%', padding:'1%',fontSize:'30px', backgroundColor:' #2A265F'}}>
            <Link to="/">Home</Link>
            
            <Link to="/create"> Create article</Link>
            </nav>
           <Outlet/>
        </div>
    )
}