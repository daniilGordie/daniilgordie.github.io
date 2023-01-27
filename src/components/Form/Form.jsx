import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { checkAPI } from '../../api/api'
import CheckedVinList from '../CheckedVinList/CheckedVinList'

const Form = () => {
    const [decodedVarList, setDecodedVarList] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            vinCode: '',
        },
    })

    const checkedVin = watch('vinCode')
    const onSubmit = async () => {
        const vinResponse = await checkAPI.checkVin(checkedVin)
        setDecodedVarList(vinResponse)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.vin_form}>
                <input
                    type="text"
                    placeholder="Please enter vin code"
                    {...register('vinCode', { required: true, maxLength: 17 })}
                    className={s.form_input}
                />
                {errors.vinCode && (
                    <div className={s.error_block}>
                        <span>This field is required</span>
                    </div>
                )}

                <button className={s.cool_button}>check</button>
            </form>
            <CheckedVinList decodedVarList={decodedVarList} />
        </div>
    )
}

export default Form
