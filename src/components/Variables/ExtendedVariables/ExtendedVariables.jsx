import React from 'react'
import s from './ExtendedVariables.module.css'

const ExtendedVariables = (props) => {
    const extendedValiablesElem = props.extendedVarList
        .filter((result) => result.Value !== null)
        .map((filteredResult) => (
            <div className={s.content_wrapper}>
                <span className={s.content_label}>
                    {filteredResult.Name}
                    {`: `}
                </span>
                <span className={s.content_value}>
                    {filteredResult.Description}
                </span>

                <br />
            </div>
        ))
    return <div>{extendedValiablesElem}</div>
}

export default ExtendedVariables
