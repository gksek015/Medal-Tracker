import React from 'react'

const Medal = ({gold, silver, bronze, inputGold, inputSilver, inputBronze, handleAdd, handleUpdate}) => {
    return (
        <div>
            <div>
                <label htmlFor="gold">금메달</label>
                <input type="number" value={gold} onChange={inputGold} />
            </div>
            <div>
                <label htmlFor="silver">은메달</label>
                <input type="number" value={silver} onChange={inputSilver} />
            </div>
            <div>
                <label htmlFor="bronze">동메달</label>
                <input type="number" value={bronze} onChange={inputBronze} />
            </div>
            <div>
                <button type="submit" onClick={handleAdd}>추가</button>
                <button type="button" onClick={handleUpdate}>
                    업데이트</button>
            </div>
        </div>
)}

export default Medal