import {ElementRef, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';

type ContactForm = {
    name: string
    email: string
    message: string
}

export const useContact = () => {
    const form = useRef<ElementRef<'form'>>(null)

    const sendEmail = (e: any) => {

        if (!form.current) {
            return
        }

        emailjs.sendForm('service_9iavbg5', 'template_p9plfde',
            form.current, 'EoVymZPV20bKv1LfV')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: ContactForm = {} as ContactForm
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) errors.name = 'Required'
            if (!values.message) errors.message = 'Required'
            return errors
        },
        onSubmit: (values) => {
            sendEmail(values)
            formik.resetForm()
        }
    })

    return {
        form, formik
    }
}