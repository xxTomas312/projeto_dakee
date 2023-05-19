import React, { ChangeEvent } from 'react';
import './search_bar.css'; // Import the CSS file
import Search_btt from '../../images/search_btt.png'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleSearch = () => {
    // Perform search logic using the search term
    console.log('Performing search...');
  };

  return (
    <div className="search-bar"> {/* Apply the CSS class name */}
    <button type="button" onClick={handleSearch}><img src={Search_btt} alt="Search button" /></button>
      <input type="text" placeholder="Choose a city..." onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;