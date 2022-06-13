import { Card, MainList, OtherPage, Selector, ThisPage } from "./style"
import { base_URL } from "../../constants/base_url"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { api_key } from "../../constants/api_key"
import { convertDate } from "../../hooks/convertDate"
import { goToDetail } from "../../routes/cordinator"

export default function MainMovieList() {
    const history = useHistory()
    const [page, setPage] = useState(1)
    const [queryResult, setQueryResult] = useState([])
    function PageSelector() {
        function goToNextPage() {
            setPage(page + 1)
        }
        function goToPreviousPage() {
            setPage(page - 1)
        }
        function goToFirstPage() {
            setPage(1)
        }
        function forwardTwoPages() {
            setPage(page + 2)
        }
        function forwardThreePages() {
            setPage(page + 3)
        }
        function forwardFourPages() {
            setPage(page + 4)
        }
        function backwardTwoPages() {
            setPage(page - 2)
        }
        if (page === 1) {
            return (
                <Selector>
                    <ThisPage>{page}</ThisPage>
                    <OtherPage onClick={goToNextPage}>{page + 1}</OtherPage>
                    <OtherPage onClick={forwardTwoPages}>{page + 2}</OtherPage>
                    <OtherPage onClick={forwardThreePages}>{page + 3}</OtherPage>
                    <OtherPage onClick={forwardFourPages}>{page + 4}</OtherPage>
                    <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                </Selector>
            )
        } else if (page === 2) {
            return (
                <Selector>
                    <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                    <OtherPage onClick={goToPreviousPage}> {page - 1}</OtherPage>
                    <ThisPage>{page}</ThisPage>
                    <OtherPage onClick={goToNextPage}>{page + 1}</OtherPage>
                    <OtherPage onClick={forwardTwoPages}>{page + 2}</OtherPage>
                    <OtherPage onClick={forwardThreePages}>{page + 3}</OtherPage>
                    <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                </Selector>)
        } else {
            return (
                <Selector>
                    <OtherPage onClick={goToFirstPage} >Primeira</OtherPage>
                    <OtherPage onClick={goToPreviousPage}>&#60;</OtherPage>
                    <OtherPage onClick={backwardTwoPages}>{page - 2} </OtherPage>
                    <OtherPage onClick={goToPreviousPage}> {page - 1}</OtherPage>
                    <ThisPage>{page}</ThisPage>
                    <OtherPage onClick={goToNextPage}>{page + 1}</OtherPage>
                    <OtherPage onClick={forwardTwoPages}>{page + 2}</OtherPage>
                    <OtherPage onClick={goToNextPage}>&#62;</OtherPage>
                </Selector>
            )
        }
    }
    const getPopularMovies = () => {
        axios.get(`${base_URL}/movie/popular?${api_key}&language=pt-BR&page=${page}`)
            .then((res) => {
                setQueryResult(res.data.results)
            })
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }
    useEffect(() => {
        getPopularMovies()
    }, [page])
    const clickDetail = (id) => {
        goToDetail(history, id)
    }
    const moviesList = queryResult.map((movie) => {
        let dateBr = convertDate(movie.release_date)
        return (
            <Card
                key={movie.id}
                onClick={() => clickDetail(movie.id)}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`Poster do filme ${movie.title}`}
                />
                <div>
                    <h4>{movie.title}</h4>
                    <p>{dateBr}</p>
                </div>
            </Card>
        )
    })
    return (
        <>
            <MainList>
                {moviesList}
            </MainList>
            <PageSelector />
        </>
    )
}