import React, { useEffect, useState } from "react";
import { getNumberResult, getMegaResults, getContestResult } from "../API/getApiResults";
import { collorsLoto, colorMegaSena } from "../constants/colors";
import { DivBallNumber, DivDivision, DivMain, DivNumbers, DivSelect } from "./Styles";

export const HomePage = () => {
    const [mega, setMega] = useState({ id: 0, nome: "mega-sena" })
    const [resultMega, setResultMega] = useState([])
    const [contestMega, setContestMega] = useState([])
    const [numbersMega, setNumberMega] = useState([])
    const [controlColor, setControlColor] = useState(colorMegaSena)

    useEffect(() => {
        getMegaResults(setResultMega)
        getContestResult(setContestMega)
    }, [mega])

    useEffect(() => {
        contestMega.filter((data) => {
            if (data.loteriaId === mega.id) {
                getNumberResult(setNumberMega, data.concursoId)
                collorsLoto.map((data) => {
                    if (mega.id === data.id) {
                        setControlColor(data.color)
                    }
                })
            }
        })
    }, [contestMega])

    const date = numbersMega.data && numbersMega.data.split('T')[0]
    const formatDate = date && date.split('-')
    const newDate = formatDate && `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`

    const onChangeSelectedMega = (event) => {
        resultMega.filter((data) => {
            if (event.target.value === data.id.toString()) {
                setMega(data)
            }
        })
    }

    const renderSelectMega = resultMega.map((data) => {
        return <option key={data.id} value={data.id}>
            {data.nome.toUpperCase()}
        </option>
    })

    const renderSelectNumber = numbersMega.numeros && numbersMega.numeros.map((data, index) => {
        return <DivBallNumber key={index}>
            {data}
        </DivBallNumber>
    })

    const renderNumberConcurse = contestMega && contestMega.filter((data) => {
        return data.loteriaId === mega.id
    })

    return (
        <DivMain color={controlColor}>
            <DivSelect>
                <select onChange={onChangeSelectedMega}>
                    {renderSelectMega}
                </select>
                <h2>{mega.nome.toUpperCase()}</h2>
                <p>Concurso Nº {renderNumberConcurse[0] && renderNumberConcurse[0].concursoId} - {newDate}</p>
            </DivSelect>
            <DivDivision>
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2436 252">
                    <path class="cls-1" d="M0,494s1000-243,2436,0V638H0Z" transform="translate(0 -386)" />
                </svg>
            </DivDivision>
            <DivNumbers>
                <div>
                    {renderSelectNumber}
                </div>
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </DivNumbers>
        </DivMain>
    )
}