import CTAButton from "./CTAButton"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full">
            <Logo />
            <CTAButton text="Join Waitlist" />
        </nav>
    )
}

export default Navbar
