import React from 'react'
import s from './CheckedVinList.module.css'
import CharacteristicsEl from './CharacteristicsEl/CharacteristicEl'

const CheckedVinList = (props) => {
    const characteristicElem = props.decodedVarList
        .filter((result) => result.Value !== null)
        .map((filteredResult) => (
            <CharacteristicsEl
                value={filteredResult.Value}
                variable={filteredResult.Variable}
            />
        ))
    return <div className={s.checked_list}>{characteristicElem}</div>
}

export default CheckedVinList
