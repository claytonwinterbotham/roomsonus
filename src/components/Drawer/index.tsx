import React from 'react'
import RcDrawer from 'rc-drawer'
import 'rc-drawer/assets/index.css'

type DrawerProps = {
    className?: string
    children?: any
    closeButton?: any
    closeButtonStyle?: any
    drawerHandler: any
    toggleHandler: any
    open: any;
    width?: string;
    placement?: 'left' | 'right' | 'top' | 'bottom'
}

export const Drawer: React.FunctionComponent<DrawerProps> = ({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    ...props

}) => {
    //Add all classes to an array
    const addAllClasses = ['drawer']

    // classname prop checking
    if (className) {
        addAllClasses.push(className)
    }
    return(
        <>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                className={addAllClasses.join(' ')}
                width={width}
                placement={placement}
                handler={false}
                level={null}
                duration=".4s"
                {...props}
            >
                {closeButton && (
                    <div
                        className='drawer__close'
                        onClick={toggleHandler}
                        style={closeButtonStyle}
                    >
                        {closeButton}
                    </div>
                )}

                {children}
            </RcDrawer>
            <div
                className="drawer__handler"
                style={{ display: 'inline-block' }}
                onClick={toggleHandler}
            >
                {drawerHandler}
            </div>
        </>
    )
}
