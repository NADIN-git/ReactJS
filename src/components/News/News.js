import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from "../../store/news/Reducer"
import { fetchNews, fetchNewsByAxios, setNewsList } from "../../store/news/Actions"
import { getNews } from "../../store/news/Selectors";

export default function News(props) {
    //const { status, list } = useSelector((state) => state.news)
    const { status, list } = useSelector(getNews);
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Подождите... Загружаются данные...</p>
    }

    return (
        <div className="Menu_dz3">
            <div>
                <div className="Message_border">
                    <Button
                        onClick={loadData}
                        style={{ margin: '20px' }}
                        variant="contained"
                        color="primary"
                    > Загрузить данные
                    </Button>
                    <Button
                        onClick={loadDataByAxios}
                        style={{ margin: '20px' }}
                        variant="contained"
                        color="primary"
                    > Загрузить данные c Axios
                    </Button>
                    <Button
                        onClick={clearData}
                        style={{ margin: '20px' }}
                        variant="contained"
                        color="primary"
                    > Очистить данные
                    </Button>
                </div>
            </div>
            <div className="Message_border Left_right">
                <div className="centre">
                    <p>News page</p>
                </div>
                {status !== NEWS_REQUEST_STATUS.ERROR ? (
                    <ol>
                        {list.map((newsItem) => (
                            <li key={newsItem.id}>
                                <p>{newsItem.title}</p>
                                <a href={newsItem.imageUrl} target="_blank">"Ссылка: "{newsItem.imageUrl}</a>
                            </li>

                        ))}
                    </ol>
                ) : (
                    <p style={{ color: 'red' }}>ERROR!!!</p>
                )}
            </div>
        </div >
    )
}