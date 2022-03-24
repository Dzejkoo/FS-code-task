import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
    max-width: 50%;
    margin: 20px 0;
    border: 1px solid;
    padding: 10px 30px 10px 20px;
`
export const Title = styled.h2`
    width: auto;
    font-size: 20px;
`
export const BasicInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    align-items: flex-start;
`

export const AssignedTo = styled.div`
    display: flex;
    flex-direction: column;
    span:last-child{
        margin-bottom: 10px;
    }

`
export const AssignedToWrapper = styled.div`
    display: flex;
    flex-direction: column;
`