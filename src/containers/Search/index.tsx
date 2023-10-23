import { SButton, SSearchContainer, SSearchInput } from './style'

const Search = () => {
  return (
    <SSearchContainer>
      <SSearchInput type="text" />
      <SButton type="submit" placeholder="->">
        ---
      </SButton>
    </SSearchContainer>
  )
}

export default Search
