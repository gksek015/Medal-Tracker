import React from "react";

const Table = ({countries, handleDelete}) => {
    return (
    <table>
        <thead>
            <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country) => (
                <tr key={country.id}>
                    <td>{country.country}</td>
                    <td>{country.gold}</td>
                    <td>{country.silver}</td>
                    <td>{country.bronze}</td>
                    <td>
                        <button onClick={() => handleDelete(country.id)}>
                            삭제
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
};

export default Table;
