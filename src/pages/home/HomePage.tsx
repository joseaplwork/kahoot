import { Layout } from '@/shared/components'

import { Pagination } from './components/Pagination/Pagination'
import { PokemonList } from './components/PokemonList/PokemonList'
import { useGetCurrentPage } from './hooks/use-get-current-page'
import { useGetPokemonList } from './hooks/use-get-pokemon-list'

function HomePage() {
  const { currentPage, setCurrentPage } = useGetCurrentPage()
  const { pokemonList, error, loading } = useGetPokemonList(currentPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Layout>
      <PokemonList list={pokemonList.results} error={error} loading={loading} />
      <Pagination
        count={pokemonList.count}
        next={pokemonList.next}
        previous={pokemonList.previous}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Layout>
  )
}

export default HomePage
