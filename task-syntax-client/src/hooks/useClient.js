import { useEffect, useState } from "react"

const useClient = email => {
    const [isClient, setIsClient] = useState(false);
    const [isClientLoading, setIsClientLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/client/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsClient(data.isAdmin);
                    setIsClientLoading(false);
                })
        }
    }, [email])
    return [isClient, isClientLoading]
};

export default useClient;