import React, { ChangeEvent, useState } from 'react';
import './search_bar.css';
import Search_btt from '../../images/search_btt.png'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleSearch = () => {
    // Realize a lógica de pesquisa aqui
    const result = "Resultado da pesquisa para Faro";
    setSearchResult(result);
  };

  return (
    <div className="search-bar">
      <button type="button" onClick={handleSearch}><img src={Search_btt} alt="Search button" /></button>
      <input type="text" placeholder="Choose a city..." onChange={handleInputChange} />
      {searchResult && (
        <div className="search-result">
          {searchResult}
        </div>
      )}
    </div>
  );
};

export default SearchBar;