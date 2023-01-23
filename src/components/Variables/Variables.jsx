import React from 'react'
import s from './Variables.module.css'

const Variables = (props) => {
    return (
        <div className={s.variables_list}>
            <span className={s.variables}>Variable 1</span>
            <span className={s.variables}>Variable 2</span>
            <span className={s.variables}>Variable 3</span>
        </div>
    )
}

export default Variables
