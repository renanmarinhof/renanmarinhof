import { Group, Header, Rectangle, Top } from "./style";
import tmdb from '../../img/tmdb-logo.png'

export default function MainHeader() {
    return (
        <Header>
            <Top>
                <img
                    src={tmdb}
                    alt='Logo The Movie DataBase'
                />
            </Top>
            <Rectangle>
                <Group>
                    <p>
                        Milhões de filmes, séries e pessoas para descobrir. Explore já.
                    </p>
                </Group>
            </Rectangle>
        </Header>
    )
}