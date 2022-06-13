import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../globalStyle';
import DetailPage from '../pages/detail/detailPage';
import ErrorPage from '../pages/error/errorPage';
import MainPage from '../pages/main/mainPage';

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path={'/'}>
                    <MainPage />
                </Route>
                <Route exact path={'/movie/:id'}>
                    <DetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}