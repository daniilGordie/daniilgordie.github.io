import React from 'react'
import s from './CheckedVinList.module.css'

const CheckedVinList = (props) => {
    return (
        <div className={s.checked_list}>
            <div className={s.checked_variables}>Variable 1</div>
            <div className={s.checked_variables}>Variable 2</div>
            <div className={s.checked_variables}>Variable 3</div>
        </div>
    )
}

export default CheckedVinList
