import styled from "styled-components";

export const PlayerButton = styled.button`
color: #ffffff;
padding: 0.7em 1em;
width:150px;
margin: 0.5em;
font-size: 18px;
border-radius: 0.2em;
background: #4e4b4b;
border: 1px #4e4b4b;
box-shadow: 1px 1px 3px #5c5c5c,
            -1px -1px 3px #636363;
&:active {
color: #666;
box-shadow: inset 1px 1px 7px #5c5c5c,
            inset -1px -1px 7px #636363;
}`
