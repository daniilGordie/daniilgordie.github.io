import React, { useState } from 'react'
import s from './Variables.module.css'
import ExtendedVariables from './ExtendedVariables/ExtendedVariables'
import { checkAPI } from '../../api/api'

const Variables = (props) => {
    const [extendedVarList, setExtendedVarList] = useState([])

    const getVariablesList = async () => {
        const varResponse = await checkAPI.getExtendedVarExplanation()
        setExtendedVarList(varResponse)
    }
    return (
        <div>
            <article>
                This section will help you understand which variables are
                encrypted in the vin-code, as well as their full meaning
            </article>
            <span>
                If you want to get extended variable list, please press the
                button
            </span>
            <br />
            <div>
                <button className={s.cool_button} onClick={getVariablesList}>
                    Get Variables
                </button>
            </div>
            <br />

            <ExtendedVariables extendedVarList={extendedVarList} />
        </div>
    )
}

export default Variables
