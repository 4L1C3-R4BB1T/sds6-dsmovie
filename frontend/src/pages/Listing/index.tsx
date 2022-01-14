import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';
import { MoviePage } from 'types/movie';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

function Listing() {
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title,ASC`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mt-4">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>

            <Pagination page={page} onChange={handlePageChange} />
        </>
    );
}

export default Listing;