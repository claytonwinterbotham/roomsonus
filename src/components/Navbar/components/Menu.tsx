import React from 'react'
import { MenuItemWrapper, MenuItem, StyledLink } from '../Navbar.style'
import { AnchorLink } from "gatsby-plugin-anchor-links";

type MenuProps = {
    items: MenuItemsProps[]
    className?: string
    location?: any
}

type MenuItemsProps = {
    url: string
    label: string
    external?: boolean
    anchor?: boolean,
}

export const Menu: React.FunctionComponent<MenuProps> = ({
    items,
    className,
    location,
    ...props
}) => {

    //Add all classes to an array
    const addAllClasses = ["menu"]

    // className prop checking
    if (className) {
        addAllClasses.push(className)
    }
    return (
        <MenuItemWrapper className={addAllClasses.join(" ")} {...props}>
            {items.map((item, index) =>(
                <MenuItem key={index}>
                    {item.anchor ? (
                        <AnchorLink 
                            to={item.url}
                            stripHash={true}
                            
                        >{item.label}</AnchorLink>
                    ) : (
                        <StyledLink to={item.url}>
                            {item.label}
                        </StyledLink>
                    )}
                </MenuItem>
            ))}
        </MenuItemWrapper>
    )
}
