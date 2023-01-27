import React from 'react'
import s from './CharacteristicsEl.module.css'

const CharacteristicsEl = (props) => {
    return (
        <div className={s.content_wrapper}>
            <span className={s.content_label}>{props.variable}:</span>
            <span className={s.content_value}>{props.value}</span>
        </div>
    )
}

export default CharacteristicsEl
