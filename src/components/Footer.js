import { Box } from "@mui/system";

export default function Footer () {
    
    return(
        <Box>
            <footer id='footer'>
                    <div id='containerhelp'>
                        <h6> Help &amp; Customer Service</h6>
                        <ul className='footerlist listitems'>
                            <li>FAQ</li>
                            <li>Delayed Pre-Orders List</li>
                            <li>Shipping &amp; Returns</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div id='containerlegal'>
                        <h6> Legal</h6>
                        <ul className='footerlist listitems'>
                            <li>Do Not Sell My Personal Information</li>
                            <li>Copyright Policy</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div id='containerabout'>
                        <h6>About us</h6>
                        <p className='footerlist'>Crunchy Spin was made as a mock of Crunchy roll the popular anime watching and merchandising website. Crunchy Spin is a backend testing project for PerScholas where we used back-end packages like Mongoose, &amp; Express to create a store and while rendering front end elements using React.</p>
                        <p className='footerlist'>Email: lucasDsilva154@gmail.com</p>
                        <a href='https://www.linkedin.com/in/lucas-dasilva-1100aa251/' className='footerlist'>Linkedin</a>
                        <a href='https://github.com/lucasDsilva15?tab=repositories' className='footerlist'>GitHub</a>
                    </div>
                    </footer>
                </Box>
    )
}