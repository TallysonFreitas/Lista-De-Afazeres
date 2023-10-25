import { SButton, SSearchContainer, SSearchInput } from './style'

const Search = () => {
  return (
    <SSearchContainer>
      <SSearchInput type="text" />
      <SButton type="submit" placeholder="->">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </SButton>
    </SSearchContainer>
  )
}

export default Search
