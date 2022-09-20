import Link from 'next/link'

export default function Header() {
    return (
        <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="container w-container">
                <Link href="#"><a className="w-nav-brand"><img src="images/Group-3.svg" loading="lazy" alt="" className="image-8" /></a></Link>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <Link href="#"><a className="nav-link w-nav-link">Home</a></Link>
                    <Link href="#"><a className="nav-link w-nav-link">Us</a></Link>
                    <Link href="#"><a className="nav-link w-nav-link">Career</a></Link>
                    <Link href="#"><a className="nav-link w-nav-link">Contact</a></Link>
                </nav>
                <div className="menu-button w-nav-button">
                    <div className="w-icon-nav-menu" />
                </div>
            </div>
        </div>
    )
}