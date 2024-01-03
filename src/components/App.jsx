import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Layout = lazy(() => import('../components/Layout'))
const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Cast = lazy(() => import('../pages/Cast'))
const Reviews = lazy(() => import('../pages/Reviews'))


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
          </Route>
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;