import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <p>© 2023 navigatedu. All right reserved.</p>
            <div>
                <p to='/privacy-policy' className="footerLink">Privacy Policy</p>
            </div>
            <div>
                <p to='/terms-of-service' className="footerLink">Terms of Service</p>
            </div>
        </div>
    )
}