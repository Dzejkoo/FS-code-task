import React from "react";
import { Wrapper, WorkOrder, Description, ReceivedDate, AssignedTo, Status, Priority } from "./List.styles";

export const Header = () =>{
    return(
        <Wrapper>
            <WorkOrder>WO ID</WorkOrder>
            <Description>Description</Description>
            <ReceivedDate>Received date</ReceivedDate>
            <AssignedTo>Assigned to</AssignedTo>
            <Status>Status</Status>
            <Priority>Priority</Priority>
        </Wrapper>
    )
}