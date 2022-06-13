import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { api_key } from "../../constants/api_key"
import { base_URL } from "../../constants/base_url"
import { Body, CastCard, CastList, CastTitle, Content, CrewNames, Genres, Header, Info, InfoContainer, InfoText, MemberCard, MovieTitle, Overview, RatingCard, RatingContainer, RatingWheel1, RatingWheel2, RecomendationCard, Recomendations, RecommendationList, Rectangle, SideRating, TextOverview, TitleInfo, Top, Trailer } from "./style"
import tmdb from '../../img/tmdb-logo.png'
import { useEffect, useState } from "react"
import { convertDate, getYear } from "../../hooks/convertDate"
import { convertTime } from "../../hooks/converTime"
import { goToDetail, goToMain } from "../../routes/cordinator"

export default function DetailPage() {
    const history = useHistory()
    const params = useParams()
    const [movie, setMovie] = useState({})
    const [crew, setCrew] = useState([])
    const [cast, setCast] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const id = history.location.pathname.split('/')[2]
    const [duration, setDuration] = useState()
    const [dateBr, setDateBr] = useState()
    const [year, setYear] = useState()

    function getDetails() {
        axios.get(`${base_URL}/movie/${id}?${api_key}&language=pt-BR`)
            .then((res) => {
                setMovie(res.data)
                setDuration(convertTime(res.data.runtime))
                setDateBr(convertDate(res.data.release_date))
                setYear(getYear(res.data.release_date))
            })
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }

    function getCredits() {
        axios.get(`${base_URL}/movie/${id}/credits?${api_key}&language=pt-BR`)
            .then((res) => {
                setCast(res.data.cast)
                setCrew(res.data.crew)
            })
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }

    const crewNames = crew.filter((item) => {
        return (
            item.job === "Executive Producer" ||
            item.job === "Director" ||
            item.job === "Screenplay" ||
            item.job === "Casting"
        )
    })
        .map((member) => {
            return (
                <MemberCard
                    key={Math.floor(Date.now() * Math.random()).toString(36)}
                >
                    <h4>{member.name} </h4>
                    <p>{member.job} </p>
                </MemberCard>
            )
        })
    const castNames = cast.map((actor) => {
        return (
            <CastCard>
                <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={`Foto de ${actor.name}`}
                />
                <div
                    key={actor.id}
                >
                    <h3>{actor.name}</h3>
                    <p>{actor.character}</p>
                </div>
            </CastCard>
        )
    })
    function Rating() {
        const rate = movie.vote_average * 10
        return (
            <RatingContainer>
                <p>{`${rate}%`}</p>
            </RatingContainer>
        )
    }

    const clickDetail = (id) => {
        goToDetail(history, id)
    }

    function GetRecomendations() {
        axios.get(`${base_URL}/movie/${id}/recommendations?${api_key}&language=pt-BR&page=1`)
            .then((res) => {
                setRecommendations(res.data.results)
            })
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }
    const recommendationList = recommendations.map((item) => {
        let dateBr = convertDate(item.release_date)
        return (
            <RecomendationCard
                onClick={() => clickDetail(item.id)}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={`Poster do filme ${item.name}`}
                />
                <div
                    key={item.id}

                >
                    <h3>{item.title}</h3>
                    <p>{dateBr}</p>
                </div>
            </RecomendationCard>
        )
    })

    const genreList = Array.isArray(movie.genres) && movie.genres.map((genre) => {
        return (
            <InfoText>{genre.name}</InfoText>
        )
    })

    const countries = Array.isArray(movie.production_countries) && movie.production_countries.map((country) => {
        return (
            <InfoText>{country.iso_3166_1}</InfoText>
        )
    })

    useEffect(() => {
        getDetails()
        getCredits()
        GetRecomendations()
    }, [params.id])

    return (
        <Body>
            <Header>
                <Top>
                    <img
                        src={tmdb}
                        alt='Logo The Movie DataBase'
                        onClick={() => goToMain(history)}
                    />
                </Top>
                <Rectangle>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`Poster do filme ${movie.title}`}
                    />
                    <InfoContainer>
                        <TitleInfo>
                            <MovieTitle>{`${movie.title} (${year})`}</MovieTitle>
                            <Info>
                                <InfoText> {dateBr} </InfoText>
                                <InfoText> • </InfoText>
                                {countries}
                                <InfoText> • </InfoText>
                                <Genres>{genreList}</Genres>
                                <InfoText> • </InfoText>
                                <InfoText>{duration}</InfoText>
                            </Info>
                        </TitleInfo>
                        <RatingCard>
                            {Rating()}
                            <SideRating>Avaliação dos usuários</SideRating>
                        </RatingCard>
                        {movie.overview !== "" &&
                            <div>
                                <Overview>Sinopse</Overview>
                                <TextOverview>{movie.overview} </TextOverview>
                            </div>
                        }
                        <CrewNames>
                            {crewNames}
                        </CrewNames>
                    </InfoContainer>
                </Rectangle>
            </Header>
            <Content>
                {castNames.length > 0 &&
                    <div>
                        <CastTitle>Elenco original</CastTitle>
                        <CastList>
                            {castNames}
                        </CastList>
                    </div>}
                {recommendationList.length > 0 &&
                    <div>
                        <Recomendations>Recomendações</Recomendations>
                        <RecommendationList>
                            {recommendationList}
                        </RecommendationList>
                    </div>
                }
            </Content>
        </Body>
    )
}