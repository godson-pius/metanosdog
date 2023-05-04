import React from 'react'
import { toast } from 'react-toastify'

const handleRequestPermission = async() => {
    const perm = await Notification.requestPermission()
    { perm === 'granted' ? console.log('You will be notified when needed') : toast.warn('You will not get notified when messages come in! Please accept notification') }
}

const pushNotification = async(subject, body) => {
    const perm = await Notification.requestPermission()

    if (perm === 'granted') {
        new Notification(subject, { body })
    }
}

export { handleRequestPermission, pushNotification }