import './footer.css'
import Icon from '../icones/icon.jsx'
export default function Footer() {
    return (
        <footer className="footer  d-flex flex-column align-itens-center justify-content-center text-center pt-3">
            <div className="reveal d-flex flex-row justify-content-center align-items-center gap-2 ">
                 <Icon icone={"bi bi-linkedin "} link={"https://www.linkedin.com/in/carlos-gonçalves-b38701211"}/>
                 <Icon icone={"bi bi-instagram"} link={"https://www.instagram.com/dev_carlos_mateus"}/>
                 <Icon icone={"bi bi-twitter-x"} link={"https://x.com/MateusGona80865"}/>
                 <Icon icone={"bi bi-tiktok"} link={"instagram.com/dev_carlos_mateus"}/>
            </div>
            <p className='text-white mt-2'>© 2025 Mateus Gonçalves | All rights reserved.</p>
        </footer>
    )
}