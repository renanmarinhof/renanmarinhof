import MainHeader from '../../components/mainHeader/header'
import MainMovieList from '../../components/mainList/mainList'
import { MainPage } from './style'

export default function mainPage() {
    return (
        <MainPage>
            <MainHeader />
            <MainMovieList />
        </MainPage>
    )
}