import { useState, useEffect } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

function FetchData() {

  const [isLoading, setIsLoading] = useState(true)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const url = 'https://manutd-players.herokuapp.com/players';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.players);
    setPlayers(data.players)
    setIsLoading(false)
  }

  const dataRenderer = players.map((place, index) => (
    <Grid key={index}>
      <h1>{place.position}s</h1>
      <Grid container spacing={2} style={{ paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px" }}>
        {place.members.map((player, key) => {
          if (place.position === player.position) {
            return (
              <Grid item xs={3} key={key}>
                <Card>
                  <CardMedia image={'https://' + player.image} style={{ width: "250px", height: "300px", margin: "auto" }} />
                  <CardContent>
                    <Typography><b>{player.name}</b></Typography>
                    <Typography><b>Position:</b> {player.position}</Typography>
                    <Typography><b>Jersey No:</b> {player.jersey}</Typography>
                    <Typography><b>Country:</b> {player.country}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          }
        }

        )}
      </Grid>
    </Grid>

  ))



  return (
    <div>
      <h1>Manchester United Players</h1>
      <div>{dataRenderer}</div>
    </div>

  )
}

export default FetchData