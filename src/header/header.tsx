import './header.css';

import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';
import idfLogo from './idf-logo.png';

export function Header() {
    // const midNavItems = [
    //     {
    //         text: 'בית',
    //         link: '/',
    //     },
    //     {
    //         text: 'תגים',
    //         link: '/tags',
    //     },
    // ];

    return (
        <AppBar
            className="header fade-in"
            color="primary"
            position="static"
            sx={{ userSelect: 'none', backgroundImage: 'linear-gradient(90deg, var(--color--gray--darkest), var(--color--green--dark))' }}
        >
            <Toolbar variant="dense" sx={{ padding: '0 8px !important' }}>
                <NavLink to="/" style={{ display: 'flex' }}>
                    <img src={idfLogo} alt="IDF logo" style={{ marginLeft: '8px', maxHeight: '32px' }} />
                </NavLink>
                <NavLink to="/" style={{ display: 'flex' }}>
                    <Typography variant="h4" className="font--hatch" sx={{ color: '#fff' }}>
                        סמלי צה&quot;ל
                    </Typography>
                </NavLink>

                {/*<Box sx={{ flexGrow: 1 }} />*/}
                {/*<Box sx={{ marginRight: '1rem' }}>*/}
                {/*    {midNavItems.map((item) => (*/}
                {/*        <NavLink key={item.link} to={item.link} className="header--link font--hatch" style={{ margin: '0 1rem', fontSize: '1.5rem' }}>*/}
                {/*            {item.text}*/}
                {/*        </NavLink>*/}
                {/*    ))}*/}
                {/*</Box>*/}
            </Toolbar>
        </AppBar>
    );
}
