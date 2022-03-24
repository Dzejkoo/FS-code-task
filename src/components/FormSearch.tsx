import React, { useState } from "react";
import { ListItem } from './ListItem'
import {Wrapper, WrapperList, SearchWrapper} from './FormSearch.styles'
import { Header } from './Header'
interface IProps {
    info?:
    {
        current_page: number,
        data: {
            assigned_to?: {
            person_name?:string, 
            status?: string, 
            }[]
        description: string, 
        priority: string, 
        received_date: string, 
        status: string, 
        work_order_id: number,
        }[]
        from: number, 
        last_page: number, 
        per_page: number, 
        to: number, 
        total: number,
    }
}

interface State {
            assigned_to?: {
            person_name?:string, 
            status?: string, 
            }[]
        description: string, 
        priority: string, 
        received_date: string, 
        status: string, 
        work_order_id: number,
}

export const FormSearch = ({ info }: IProps) =>{
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<State[] | []>();

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phrase = event.target.value;
        setQuery(phrase)
        foundPhrase()
    }

    const foundPhrase = () =>{
        const foundedPhrase = info?.data.filter(item => item.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setResult(foundedPhrase)
    }

    return(
        <Wrapper>
            <SearchWrapper>
                <label> Search: </label>
                <input value={query} onChange={inputHandler} />
            </SearchWrapper>
            <WrapperList>
                <Header />
                {result && result.length > 0 ? ( query.length && result?.length ? 
                    ( result?.map((item, key)=> <ListItem info={item} key={key}/>)  ) : 
                    ( info?.data.map((item, key) => <ListItem info={item} key={key} />) ) ) : 
                    ( info?.data.map((item, key) => <ListItem info={item} key={key} />) )}
            </WrapperList>
        </Wrapper>
        
    )
}