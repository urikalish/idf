import { Grid, Typography } from '@mui/material';
import React from 'react';

export function Footer() {
    return (
        <Grid container={true} className="footer" sx={{ justifyContent: 'flex-end' }}>
            <Typography variant="body2" sx={{ marginLeft: '0.25rem', color: 'var(--color--gray--darker)' }}>
                אורי קליש 2023
            </Typography>
        </Grid>
    );
}
