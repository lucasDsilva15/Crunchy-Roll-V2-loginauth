import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()
    return(
        <div>
           <div>
            <img id='webbanner' onClick={()=> navigate('/allproducts')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/files/CR_Store_Slider_D_copy_2048x.jpg?v=1668527325" alt="web banner"/>
        </div> 
        <div id='homepagesect1'>
            <div id='image1'>
                <img id='imagesect1' className="sect1imgs" src="https://cdn.shopify.com/s/files/1/0014/2648/9388/files/bandai-pvc-scale-figures-spy-x-family-anya-forger-bond-forger-napping-figuartszero-figure-32291463364652_900x.jpg?v=1668627185%20900w%20643h," alt='Image1'/>
                <h2 id='image1text'>Figurines</h2>
            </div>
             
        </div>
        </div>
        
    )
}