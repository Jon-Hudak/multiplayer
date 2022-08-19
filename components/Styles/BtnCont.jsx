import styled from "styled-components";

export const BtnCont = styled.div`
background-color: black;

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top:10px;
    height:100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top:-5px; 
    @media (max-height:500px){
        top:0px;
        flex-direction:row;
        height:100px;
        flex-shrink:1;
        
 
}
    
`