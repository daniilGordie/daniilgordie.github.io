import React from 'react'
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { checkAPI } from '../../api/api'

export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = () => {
        checkAPI.checkVin()
        checkAPI.getExtendedVarExplanation()
    }

    console.log(watch('vin_code'))

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.vin_form}>
            <input {...register('vin_code', { required: true })} />
            {errors.vin_code && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )
}
