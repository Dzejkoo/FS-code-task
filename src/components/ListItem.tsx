import React from "react";
import {Wrapper, Header, Title, AssignedToWrapper, BasicInfo, AssignedTo } from './List.styles'

interface IResponse  {
    info: {
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
};


export const ListItem = ( { info: {work_order_id, status, received_date, priority, description, assigned_to } }: IResponse) =>{
        
    return(
        <Wrapper>
            <Header>
                <Title>{work_order_id}</Title>
                <p>{description}</p>
            </Header>
            <AssignedToWrapper>
                <BasicInfo>
                    <span>{status}</span>
                    <span>{received_date}</span>
                    <span>{priority}</span>
                </BasicInfo>
                {assigned_to?.map((item, key) =>
                    <AssignedTo key={key}>
                        <span>{item.person_name}</span>
                        <span>{item.status}</span>
                    </AssignedTo>
                )}
            </AssignedToWrapper>
        </Wrapper>
    )
}