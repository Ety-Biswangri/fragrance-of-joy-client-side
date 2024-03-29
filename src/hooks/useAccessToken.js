import axios from "axios";
import { useEffect, useState } from "react"

const useAccessToken = (user) => {
    const [accessToken, setAccessToken] = useState('');
    useEffect(() => {
        const loadToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post(`https://fragrance-of-joy.onrender.com/login`, { email });
                setAccessToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        loadToken();
    }, [user]);

    return [accessToken];
}

export default useAccessToken;