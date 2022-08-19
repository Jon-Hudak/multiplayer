import { google } from "googleapis";
import ButtonContainer from "../components/ButtonContainer.jsx";
import  { GameList } from "../components//Styles/GameList";
import { useState } from "react";
import { AppCont } from "../components/Styles/AppCont.jsx";
import GameBar from "../components/GameBar";
import { GameBarSt } from "../components/Styles/GameBarSt.jsx";
const FREE_INDEX = 0;
const RACE_INDEX = 1;
const TITLE_INDEX = 2;
const FIRST_PLAYER_INDEX = 3;

const HEADERS = 0;
const FIRST_GAME_INDEX = 1;

export async function getStaticProps() {
  //Auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  //Query
  const range = `Sheet1`; //TODO: Expand to entire spreadsheet

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  const values = response.data.values;
  

  //Result

  const title = values[2];
  const players = {};
  const gameTitles = [];

  for (let i = FIRST_PLAYER_INDEX; i < values[HEADERS].length; i++) {
    players[values[HEADERS][i]] = false;
  }

  //const gameObjects=objectify(values);

  return {
    props: {
      values,
      players,
    },
  };
}

export default function Game({ values, players }) {
  const [filter, setFilter] = useState(players);

  function renderGameList(value, filter) {
    if (value[TITLE_INDEX] !== "Title") {
      for (const p in filter) {
        if (filter[p] === true) {
          if (!value.includes(p)) {
            return null;
          }
        }
      }

      return <GameBarSt key={value[TITLE_INDEX]}>{value[TITLE_INDEX]}</GameBarSt>;

      
    }
  }
  return (
    <>
      <h1>Games :)</h1>
      <AppCont className="appContainer"> 
        <ButtonContainer
          players={players}
          filter={filter}
          setFilter={setFilter}
        />
         <GameList id="gameListU">{values.map((values) => renderGameList(values, filter))}</GameList>
        
      </AppCont>
    </>
  );
}

