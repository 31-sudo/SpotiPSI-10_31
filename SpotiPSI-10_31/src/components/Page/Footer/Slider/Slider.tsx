import { useEffect, useRef, useState } from 'react';
import type { Song } from '../../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useStyles from "./SliderStyles";
import { IconButton } from '@mui/material';
import { SkipNext, SkipPrevious } from '@mui/icons-material';

interface Props {
    currentSong: Song | undefined,
    setCurrentSong(song: Song): void,
    queue: Song[],
}

const MusicPlayerSlider = ({ currentSong, setCurrentSong, queue }: Props) => {
    const { classes } = useStyles();

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number | string>('0');
    const [duration, setDuration] = useState<number | string>('0');
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        handlePause();
        audioRef.current = new Audio(`/src/audio/${currentSong?.id}.mp3`);
        handlePlay();
    }, [currentSong])

    useEffect(()=>{
        currentTime===duration&&handleNext
    },[currentTime,duration])

    const handleSeek = (e: any) => {
        if (audioRef.current !== null) {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current !== null) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    }

    const handlePlay = () => {
        if (audioRef.current !== null) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const handlePause = () => {
        if (audioRef.current !== null) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }


    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    }

    const formatDuration = (durationSeconds: number | string) => {
        let minutes: number;
        let seconds: number;

        if (typeof durationSeconds === 'number') {
            minutes = Math.floor(durationSeconds / 60);
            seconds = Math.floor(durationSeconds % 60);
        } else {
            minutes = Math.floor(Number(durationSeconds) / 60);
            seconds = Math.floor(Number(durationSeconds) % 60);
        }
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        }
    });


    const handleNext = () => {
        currentSong !== undefined && currentSong!==queue[queue.length-1]&&
         setCurrentSong(queue[queue.indexOf(currentSong) + 1])
    }
    const handlePrivious=()=>{
        
        currentSong !== undefined && currentSong!==queue[0]&&
        setCurrentSong(queue[queue.indexOf(currentSong) + -1])
    
    }


    return (
        <div className={classes.audioPlayer}>
            <audio ref={audioRef} src={`/src/audio/${currentSong?.id}.mp3`} />

            <div className={classes.trackDuration}>
                <IconButton onClick={handlePrivious}  className={classes.button}><SkipPrevious /></IconButton>
                <IconButton onClick={handlePlayPause} className={classes.button}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <IconButton onClick={handleNext}  className={classes.button}><SkipNext /></IconButton>
            </div>

            <input
                className={classes.input}
                type='range'
                min='0'
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />

            <div className={classes.time}>
                <p>{formatDuration(currentTime)}</p>
                <p>{formatDuration(duration)}</p>
            </div>
        </div>
    );

}

export default MusicPlayerSlider;