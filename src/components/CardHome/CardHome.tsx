import Link from "next/link";
import { Grid, Card } from "@material-ui/core";

import useStyles from "./styles";

interface ICardHome {
  name: string;
  image: string;
  url: string;
}

const CardHome: React.FC<ICardHome> = ({ name, image, url }) => {
  const classes = useStyles();

  return (
    <Grid
      md={3}
      container
      justifyContent="center"
      className={classes.container}
    >
      <Link href={url}>
        <a className={classes.link}>
          <Card className={classes.card}>
            <figure className={classes.figure}>
              <img
                className={classes.avatar}
                src={image}
                alt={name}
                width="100%"
                height="100%"
              />
            </figure>
            <div className={classes.contentTitle}>
              <p className={classes.title}>{name}</p>
            </div>
          </Card>
        </a>
      </Link>
    </Grid>
  );
};

export default CardHome;