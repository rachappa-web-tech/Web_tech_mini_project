import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() =>{
        alert("UserApi ") 
        alert(token)
        if(token){
            const getUser = async () =>{
                try {
                        const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                     setIsLogged(true)

                    alert(res)
                    alert('error in setIslOGGED')
                    alert(token)
                } catch (err) {
                    alert("no users")
                    alert(err.response.data.msg)
                }
            }
            getUser()
            
        }
    },[token])
    
    return {
        isLogged: [isLogged, setIsLogged]
    }
}

export default UserAPI
 