import React from 'react'
import { Link } from 'gatsby'
import { DrawerProvider } from '../Drawer/components'
import { Menu, MobileMenu } from './components'
import HeaderWrapper, {
    NavbarWrapper,
    Logo,
    MenuWrapper,
} from './Navbar.style'
import LogoImage from '../../images/roomsonuslogo.svg'

type NavbarProps = {
    className?: string
}

const MenuItems = [
    {
        label: 'Home',
        url: '/',
        external: false
    },
    {
        label: 'Search',
        url: '/search',
        external: false
    },
    {
        label: 'How it Works',
        url: '/how-it-works',
        external: false
    }
]

const Navbar: React.FunctionComponent<NavbarProps> = ({
    className,
    ...props
}) => {

    // Add all classes to an array
    const addAllClasses = ['header']

    // className prop checking
    if (className) {
        addAllClasses.push(className)
    }

    return(
        <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
            <NavbarWrapper className='navbar'>
                <Logo>
                    <Link to='/'>
                        <img src={LogoImage} alt='logo' />
                    </Link>
                </Logo>
                <DrawerProvider>
                    <MobileMenu items={MenuItems} logo={LogoImage} />
                </DrawerProvider>
                <MenuWrapper>
                    <Menu items={MenuItems} />
                </MenuWrapper>
            </NavbarWrapper>
        </HeaderWrapper>
    )
}

export default Navbar