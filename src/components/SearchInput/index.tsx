import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { SearchWrapper, StyledSearchInput } from './SearchInput.style'

type FormProps = {
    event: any
} 

export const SearchInput: React.FunctionComponent<FormProps> = ({

}) => {
    const [value, setValue] = useState('');

    const handleInput = (event: any) => {
        const value = event.target.value
        console.log(value)
        setValue(value)

        const query = value
            .toLowerCase()
            .trim()
            .replace(/[^\w ]/g, '')
            .replace(/\s+/g, '-')

        
        navigate(`/search/${query}`, { state: { query }})
        
    }

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();

    //     //Turn the search string into a URL-friendly query
    //     console.log('value', value)

    //     const query = value
    //         .toLowerCase()
    //         .trim()
    //         .replace(/[^\w ]/g, '')
    //         .replace(/\s+/g, '-')

    //     navigate(`/search/${query}`, { state: { query }})

    //     //Change the URL to match our search result
    // }

    return(
        <SearchWrapper>
            <form>
                <StyledSearchInput type="text" name="name" onChange={handleInput} maxLength={256} placeholder="Type here to search by Country or City..." />
                {/* <button type="submit">Search</button>  */}
            </form>
        </SearchWrapper>
        
    )
}
