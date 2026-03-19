import { useState, useEffect } from 'react';
import type { Song } from '../../data/song';
import type { Playlist } from '../../data/playlist'

const useSongsFetch = () => {
    const [songsList, setSongsList] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const [favoritesList, setFavoritesList] = useState<string[]>([]);
    const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
    const [favoritesError, setFavoritesError] = useState<string>();

    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [isLoadingPlaylists, setisLoadingPlaylists] = useState(false);
    const [playlistsError, setPlaylistsError] = useState<string>();

    //יצירת פונקציה אסיכרונית לשליפת שירים והשמתם בסטייט
    const fetchSongs = async () => {
        //הגדרת התחלת טעינה של שירים 
        setIsLoading(true);
        try {
            //גישה לשרת
            const response = await fetch("http://127.0.0.1:5001/api/songs");
            const data = await response.json();

            //הוספת שירים לסטייט לאחר שהתקבלו מהשרת
            setSongsList(data);
        }
        catch (error) {
            //הגדרת שגיאה בגישה לשרת
            setError("Something went wrong");
            console.log(error);
            return;
        }
        finally {
            //הגדרת שגיאה בגישה לשרת
            setIsLoading(false);
        }
    };

    const fetchFavorites = async () => {
        setIsLoadingFavorites(true);
        try {
            const response = await fetch("http://127.0.0.1:5001/api/favorites");
            const data = await response.json();

            setFavoritesList(data);
        }
        catch (error) {
            setFavoritesError("Something went wrong");
            console.log(error);
            return;
        }
        finally {
            setIsLoadingFavorites(false);
        }
    }

    const addSongTofavorites = async (id: string) => {
        try {
            await fetch('http://127.0.0.1:5001/api/favorites/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ songId: id })
            });
            setFavoritesList(prev => [...prev, id])
        }
        catch (error) {
            console.log(error);
            return;
        }
    }

    const removeSongFromfavorites = async (id: string) => {
        try {
            await fetch('http://127.0.0.1:5001/api/favorites/remove', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ songId: id })
            });
            setFavoritesList(prev => {
                prev = prev.filter((song: string) => {return song !== id});
                console.log(prev);
                return prev;
            });
        }
        catch (error) {
            console.log(error);
            return;
        }
    }


    //יצירת פונקציה אסיכרונית לשליפת שירים והשמתם בסטייט
    const fetchPlaylists = async () => {
        //הגדרת התחלת טעינה של שירים 
        setisLoadingPlaylists(true);
        try {
            //גישה לשרת
            const response = await fetch("http://127.0.0.1:5001/api/playlists");
            const data = await response.json();

            //הוספת שירים לסטייט לאחר שהתקבלו מהשרת
            setPlaylists(data);

        }
        catch (error) {
            //הגדרת שגיאה בגישה לשרת
            setPlaylistsError("Something went wrong");
            console.log(error);
            return;
        }
        finally {
            //הגדרת שגיאה בגישה לשרת
            setisLoadingPlaylists(false);
        }
    };


    const addPlaylist = async (playlistName: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5001/api/playlists', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: playlistName })
            });
            const data = await response.json();
            setPlaylists(prev => [...prev, data])
        }
        catch (error) {
            console.log(error);
            return;
        }
    }


    const addSongToPlaylist = async (playlistId: string, songId: string) => {
        try {
            await fetch(`http://127.0.0.1:5001/api/playlists/${playlistId}/add`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ songId: songId })
            });
            setPlaylists(prev => {
                return prev.map((playlist) => {
                    if (playlist.id === playlistId && !playlist.songIds.includes(songId)) {
                        playlist.songIds.push(songId);
                    }
                    return playlist;
                })
            })
        }
        catch (error) {
            console.log(error);
            return;
        }
    }


    //קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    //תזכורת: כאשר נקרא ליוז אפקט עם סוגריים ריקות זה אומר שהקוד ירוץ 
    //רק ברנרוד הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
        fetchFavorites();
        fetchPlaylists();
    }, []);

    return { songsList, isLoading, error, favoritesList, isLoadingFavorites, favoritesError,
        playlists, isLoadingPlaylists, playlistsError, fetchSongs, fetchFavorites, addSongTofavorites,
        removeSongFromfavorites, fetchPlaylists, addPlaylist, addSongToPlaylist
    };
}

export default useSongsFetch;