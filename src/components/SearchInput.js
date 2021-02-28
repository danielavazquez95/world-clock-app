import React, { useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Swal from 'sweetalert2';
import { getListTimeZones, uploadDB } from '../helpers/fetchTimezone';
import { theme } from '../helpers/themeStylesAutocomplete';

export const SearchInput = ({handleNewTimezone}) => {
  
    const [listData, setListData] = useState([]);
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {

        getListTimeZones()
        .then(data =>  setListData(data));
       
    }, [])

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : (listData.filter(data =>
          data.name.toLowerCase().slice(0, inputLength) === inputValue).slice(0,6)
        );
      };

    const getSuggestionValue = suggestion => {

        return suggestion.name
    };

    const renderSuggestion = suggestion => (
        <div>
          {suggestion.name}
        </div>
      );

    const onChange = (event, { newValue}) => {
        setValue(newValue);
    };
  
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };
  
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionSelected = (event, {suggestion}) => {

      const suggestionData = {name: suggestion.name, id: Math.floor(Math.random() * 100)};

      uploadDB(suggestionData)
      .then(resp => {
        if(resp.message){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'The timezone already exists'
          })
          return;
        }
        handleNewTimezone(suggestionData);
      });
    
      setValue('');
    };

    const inputProps = {
        placeholder: 'Search Continent/Location...',
        value,
        onChange: onChange
      };

    return (
       
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                theme={theme}
                onSuggestionSelected={onSuggestionSelected}
               
            />
    );
};