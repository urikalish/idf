import { Box, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [land, setLand] = useState(true);
    const [air, setAir] = useState(true);
    const [canSubmit, setCanSubmit] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setCanSubmit(land || air);
    }, [land, air]);

    const handleChangeLand = useCallback((event: any) => {
        setLand(event.target.checked);
    }, []);

    const handleChangeAir = useCallback((event: any) => {
        setAir(event.target.checked);
    }, []);

    const handleClickStart = useCallback(() => {
        const modes = [];
        if (land) {
            modes.push('land');
        }
        if (air) {
            modes.push('air');
        }
        if (modes.length > 0) {
            navigate(`/tags?unit-types=${modes.join(',')}`);
        }
    }, [land, air]);

    return (
        <Box className="home" sx={{ padding: '2rem' }}>
            <Typography variant="h4">חידון תגי יחידות</Typography>
            {/*<Box>*/}
            {/*    <NavLink to="/tags?mode=air" className="link">*/}
            {/*        <Button variant="outlined" sx={{ width: '12rem' }}>*/}
            {/*            <Typography>חידון תגי זרוע האוויר</Typography>*/}
            {/*        </Button>*/}
            {/*    </NavLink>*/}
            {/*</Box>*/}
            {/*<Box sx={{ marginTop: '1rem' }}>*/}
            {/*    <NavLink to="/tags?mode=land" className="link">*/}
            {/*        <Button variant="outlined" sx={{ width: '12rem' }}>*/}
            {/*            <Typography>חידון תגי זרוע היבשה</Typography>*/}
            {/*        </Button>*/}
            {/*    </NavLink>*/}
            {/*</Box>*/}
            {/*<Box sx={{ marginTop: '1rem' }}>*/}
            {/*    <NavLink to="/tags?mode=all" className="link">*/}
            {/*        <Button variant="outlined" sx={{ width: '12rem' }}>*/}
            {/*            <Typography>חידון תגי אוויר ויבשה</Typography>*/}
            {/*        </Button>*/}
            {/*    </NavLink>*/}
            {/*</Box>*/}
            <Typography variant="body2" sx={{ color: 'var(--color--gray--medium)', marginTop: '1rem' }}>
                * כל המידע באתר זה נאסף ממקורות גלויים.
            </Typography>
            <FormGroup sx={{ marginTop: '2rem' }}>
                <FormControlLabel control={<Checkbox checked={land} onChange={handleChangeLand} />} label="תגי זרוע היבשה" />
                <FormControlLabel control={<Checkbox checked={air} onChange={handleChangeAir} />} label="תגי זרוע האוויר" />
                <FormControlLabel control={<Checkbox checked={false} disabled />} label="תגי זרוע הים" />
            </FormGroup>
            <Button disabled={!canSubmit} onClick={handleClickStart} variant="outlined" sx={{ marginTop: '2rem', width: '12rem' }}>
                <Typography>התחל</Typography>
            </Button>
        </Box>
    );
}
