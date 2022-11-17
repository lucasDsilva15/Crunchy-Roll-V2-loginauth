import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()
    return(
        <div>
           <div>
            <img id='webbanner' onClick={()=> navigate('/allproducts')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/files/CR_Store_Slider_D_copy_2048x.jpg?v=1668527325" alt="web banner"/>
        </div> 
        <div id='homepagesect1'>
            <div className='image1'>
                <img className='homepageimg' onClick={()=> navigate('/figurines')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ultra-tokyo-connection-pvc-scale-figures-chainsaw-man-chainsaw-man-pop-up-parade-figure-battle-damaged-32400581394476_2000x2000.jpg?v=1668169309," alt='Image1'/>
                <h2 className='image1text' onClick={()=> navigate('/figurines')}>Figurines</h2>
            </div>
            <div className='image1'>
                <img className='homepageimg' onClick={()=> navigate('/apparel')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/products/3sxty-hoodies-outerwear-cr-loves-lady-gaga-no-one-thing-is-greater-than-another-hoodie-29667671670828_2000x2000.jpg?v=1644446942," alt='Image2'/>
                <h2 className='image1text' onClick={()=> navigate('/apparel')}>Apparel</h2>
            </div>
            <div className='image1'>
                <img className='homepageimg' onClick={()=> navigate('/manga')} src="https://otakulounge.com/wp-content/uploads/2020/06/m2uvrufvzlgoighdcwaz.jpg," alt='Image3'/>
                <h2 className='image1text' onClick={()=> navigate('/manga')}>Manga</h2>
            </div>
        </div>
        <div id="homepagesect1">
        <div className='image1'>
                <img className='homepageimg2' onClick={()=> navigate('/dvd')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/products/technicolor-universal-blu-ray-dragon-ball-super-series-complete-edition-blu-ray-limited-edition-30623767068716_2000x2000.jpg?v=1655398851," alt='Image3'/>
                <h2 className='image1text' onClick={()=> navigate('/dvd')}>DVD/Blu-Ray</h2>
        </div>
        <div className='image1'>
                <img className='homepageimg2' onClick={()=> navigate('/misc')} src="https://cdn.shopify.com/s/files/1/0014/2648/9388/files/bandai-pvc-scale-figures-spy-x-family-anya-forger-bond-forger-napping-figuartszero-figure-32291463364652_900x.jpg?v=1668627185%20900w%20643h," alt='Image3'/>
                <h2 className='image1text' onClick={()=> navigate('/misc')}>Misc.</h2>
        </div>
    </div>
    </div>
        
    )
}