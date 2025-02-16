import { useNavigate, useParams } from 'react-router-dom'

import { Layout } from '@/shared/components'

import { Detail } from './components/Detail/Detail'
import { useGetPokemonById } from './hooks/use-get-pokemon-by-id'

function PokemonDetailPage() {
  const { id } = useParams()
  const { pokemon, error, loading } = useGetPokemonById(id)
  const navigate = useNavigate()

  return (
    <Layout onNavigateBack={() => navigate(-1)}>
      <Detail pokemon={pokemon} error={error} loading={loading} />
    </Layout>
  )
}

export default PokemonDetailPage
