import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./homePage.css";
import baseballTee from "./baseball.png";
import HomeOrders from "./HomeOrders";
function HomePage() {
  return (
    <>
      <h1 className="header_top">Current Apparel For Sale</h1>
      <div className="grid_container">
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} component="img" height="140px" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} className="card_media" component="img" height="200" image={baseballTee} alt="baseball tee" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Base Ball Tee
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                $50.00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} component="img" height="200" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia sx={{ width: 320 }} component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <HomeOrders />
    </>
  );
}

export default HomePage;
