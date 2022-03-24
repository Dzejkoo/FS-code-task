import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: no-wrap;
   @media screen and (max-width: 700px){
        flex-direction: column;
        width: 90%;
        border: 1px solid;
        margin: 0 auto;
   }
    div{
        padding: 10px 10px 10px 10px;
        border: 1px solid;
   @media screen and (max-width: 700px){
        flex-wrap: wrap;
        padding: 10px 10px 10px 10px;
        border: none;
   }
    }
`
export const WorkOrder = styled.div` 
    min-width: 10%;
`
export const Description = styled.div`
    min-width: 25%;
`
export const ReceivedDate = styled.div`
    min-width: 10%;
`
export const AssignedTo = styled.div`
    min-width: 20%;
    display: flex;
    flex-direction: column;
    span{
        width: 50%;
    }
`
export const Status = styled.div`
    min-width: 15%;
`
export const Priority = styled.div`
    min-width: 10%;
`