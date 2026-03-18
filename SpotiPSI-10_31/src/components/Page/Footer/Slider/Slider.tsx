import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import useStyles from "./SliderStyles";

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
    const { classes } = useStyles();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);
    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return (
        <div >
            <div  >

                <IconButton >
                    <FastForwardRounded className={classes.button} />
                </IconButton>
                <IconButton className={classes.button}
                    aria-label={paused ? 'play' : 'pause'}
                    onClick={() => setPaused(!paused)}
                >
                    {paused ? (
                        <PlayArrowRounded sx={{ fontSize: '2rem' }} />
                    ) : (
                        <PauseRounded sx={{ fontSize: '2rem' }} />
                    )}
                </IconButton>

                <IconButton>
                    <FastRewindRounded className={classes.button} />
                </IconButton>
            </div>
            <Slider
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={(t) => ({
                    color: '#9355B2',
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 3px ${'#9355B2'}`,
                            ...t.applyStyles('dark', {
                                boxShadow: `0px 0px 0px 3px ${'#9355B2'}`,
                            }),
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                    },
                })}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                }}
            >
                <TinyText>-{formatDuration(duration - position)}</TinyText>
                <TinyText>{formatDuration(position)}</TinyText>
            </Box></div>
    );
}