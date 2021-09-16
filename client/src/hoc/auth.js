import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authUser } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthentificationCheck(props) {
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(authUser()).then(response => {
                console.log(response)
                if (!response.payload.isAuth) {
                    if (option) props.history.push('/login')
                } else {
                    if (adminRoute && !response.payload.isAdmin) props.history.push('/')
                    else {
                        if (option === false) props.history.push('/')
                    }
                }
            })
        }, [])
        return (<SpecificComponent />)
    }
    return AuthentificationCheck
}