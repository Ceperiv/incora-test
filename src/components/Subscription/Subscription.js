import React from 'react';
import {useNavigate} from "react-router-dom"

function Subscription({showsInfo, genres}) {
    const navigate = useNavigate()

    const subscriptionList = [
        {id: 1, name: 'free', prise: 0},
        {id: 2, name: 'medium', prise: 5},
        {id: 3, name: 'extra', prise: 11}
    ]

    let userSubscription = []

    const submit = (e) => {
        if (userSubscription[0] && e.target.name.toString() === userSubscription[0].id.toString()) {
            navigate("/Subscription", { replace: true })
        } else {
            window.confirm(`Are you sure you want to change
 your subscription? prise - ${subscriptionList[e.target.name - 1].prise} $`)
            userSubscription = []
            userSubscription.push(subscriptionList[e.target.name - 1])
            navigate("/Subscription", { replace: true })
        }
    }

    return (
        <div className={'Subscription'}>
            <hr/>
            <button onClick={submit} name={subscriptionList[0].id}>{subscriptionList[0].name}</button>
            <button onClick={submit} name={subscriptionList[1].id}>{subscriptionList[1].name}</button>
            <button onClick={submit} name={subscriptionList[2].id}>{subscriptionList[2].name}</button>
            <hr/>
        </div>
    );
}

export {Subscription};