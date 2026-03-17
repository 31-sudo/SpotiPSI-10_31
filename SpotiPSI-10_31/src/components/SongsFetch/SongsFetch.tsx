import { useEffect, useState } from "react";
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import { type Song } from "../../data/types";

const SongsFetch = () => {
    const [songsList, setSongsList] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();


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

    //קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    //תזכורת: כאשר נקרא ליוז אפקט עם סוגריים ריקות זה אומר שהקוד ירוץ 
    //רק ברנרוד הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
    }, [])

    return (
        <AllSongsPage isLoading={isLoading} error={error} allSongs={songsList} />
    );
}

export default SongsFetch;
