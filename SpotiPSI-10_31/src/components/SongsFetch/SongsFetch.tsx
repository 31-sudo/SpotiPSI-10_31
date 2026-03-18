import { useEffect, useState } from "react";
import SongsTable from "../SongsTable/SongsTable";
import { type Song } from "../../data/song";
import { useOutletContext } from "react-router-dom";
import type { Playlist } from "../../data/playlist";

const SongsFetch = () => {
    const [songsList, setSongsList] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const [favoritesList, setFavoritesList] = useState<string[]>([]);
    const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
    const [favoritesError, setFavoritesError] = useState<string>();

    const currentPage: string = useOutletContext();

    const [playlists, setplaylists]=useState<Playlist[]>([{id: '1', name: 'My Playlist', songsId: ['a']},{id: '1', name: 'My Playlist', songsId: ['a', 'b']},{id: '1', name: 'My Playlist', songsId: ['a']}]);
    const [isLoadingPlaylists, setisLoadingPlaylists] = useState(false);
    const [playlistsError, setplaylistsError] = useState<string>();

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
                body: JSON.stringify({songId: id})
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
                body: JSON.stringify({songId: id})
            });
            setFavoritesList(prev => {
                const idIndex: number = prev.indexOf(id);
                const newFavoritesList: string[] = [...prev];
                newFavoritesList.splice(idIndex, 1);
                return newFavoritesList;
            })
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
            setplaylists(data);
        }
        catch (error) {
            //הגדרת שגיאה בגישה לשרת
            setplaylistsError("Something went wrong");
            console.log(error);
            return;
        }
        finally {
            //הגדרת שגיאה בגישה לשרת
            setisLoadingPlaylists(false);
        }
    };

    //קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    //תזכורת: כאשר נקרא ליוז אפקט עם סוגריים ריקות זה אומר שהקוד ירוץ 
    //רק ברנרוד הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
        fetchFavorites();
    }, [])

    return (
        <SongsTable
            isLoading={isLoading}
            error={error}
            allSongs={songsList}
            isLoadingFavorites={isLoadingFavorites}
            favoritesError={favoritesError}
            favoritesList={favoritesList}
            addSongToFavorites={addSongTofavorites}
            removeSongFromFavorites={removeSongFromfavorites}
            playlists={playlists}
            isLoadingPlaylists={isLoadingPlaylists}
            playlistsError={playlistsError}
            currentPage={currentPage}
        />
    );
}

export default SongsFetch;
