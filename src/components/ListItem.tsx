import React from "react";
import { Wrapper, WorkOrder, Description, ReceivedDate, AssignedTo, Status, Priority } from "./List.styles";

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
                <WorkOrder>{work_order_id}</WorkOrder>
                <Description>{description}</Description>
                <ReceivedDate>{received_date}</ReceivedDate>
                <AssignedTo>
                    {assigned_to?.map((item, key) =>
                        <span key={key}>
                            <span>{item.person_name}</span> 
                            <span>{item.status}</span>
                        </span>
                    )}
                </AssignedTo>

                <Status>{status}</Status>
                <Priority>{priority}</Priority>
        </Wrapper>
    )
}