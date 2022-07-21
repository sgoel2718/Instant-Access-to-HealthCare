import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Services.css';

export default function RowAndColumnSpacing() {
  return (
    <>
      <h2>Services we offer</h2>
      <br />
      <Box
				sx={{
					width: "100%",
					paddingLeft: "5%",
          paddingBottom:"5%"
				}}
			>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 , lg:1}}
        xl={12} lg={12}
      >
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        
      </Grid>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 , lg:1}}
        lg={12} md={12} sm={3}
        sx={{marginTop:"2%"}}
      >
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={4} xs={11}>
          <Card className="customCard card-product" sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary" className="textcol">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" className="textcol">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </>
  );
}
