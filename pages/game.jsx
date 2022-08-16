import { google } from 'googleapis'
import ButtonContainer from '../components/ButtonContainer.jsx';
import GameList from '../components/gameList';

const FREE_INDEX=0;
const RACE_INDEX=1;
const TITLE_INDEX=2;
const FIRST_PLAYER_INDEX=3;

const HEADERS=0;
const FIRST_GAME_INDEX=1;



export async function getServerSideProps( { query }){
    //Auth
    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({ version: 'v4', auth });

    //Query
    const { id } = query;
    const range = `Sheet1!1:10`; //TODO: Expand to entire spreadsheet

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    })
    const values=response.data.values;

    

    //Result

    const title = values[2]
    const players =[];
    const gameTitles=[];
    const filteredPlayers=['Ben'];
   
    
    for (let i=FIRST_PLAYER_INDEX; i<values[HEADERS].length; i++){ 
        players.push(values[HEADERS][i]); 
        
    }

    //const gameObjects=objectify(values);

    return{
        props: {
            values,
            filteredPlayers,
            players
            
        }
    }
}



export default function Game({ values, players, filteredPlayers }){
    function renderGameList (values, filteredPlayers){

        if (values[TITLE_INDEX]!=='Title'){
            for (const player of filteredPlayers){
                if (!values.includes(player)){
                    return null;
                }
            }

            return <GameList key={values[TITLE_INDEX]}>{values[TITLE_INDEX]}</GameList>;
        }
        return null;

    

    

}
    return(
    <>
        <h1>Games :)</h1>
         {values.map((values)=> renderGameList(values, filteredPlayers))}
         <ButtonContainer players={players} filteredPlayers={filteredPlayers} />
    </>
    )  
}