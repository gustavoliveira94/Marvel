import { Grid, Container } from "@material-ui/core";

import { IComics } from "services/apis/marvel";

import Entities from "components/Entities";

import useStyles from "./styles";

export interface IComicPage {
  comic: IComics;
}

const Comic: React.FC<IComicPage> = ({ comic }) => {
  const classes = useStyles();

  const image =
    comic?.thumbnail?.path !==
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      ? `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
      : "/marvel-avatar.jpg";

  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="flex-start">
        <Grid
          md={4}
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.image}
        >
          <img src={image} alt={comic?.title} width="100%" />
        </Grid>
        <Grid md={8} item container direction="row" alignItems="flex-start">
          <Grid md={12} item container direction="row" alignItems="flex-start">
            <h2>{comic?.title}</h2>
            {comic?.description && <p>{comic?.description}</p>}
          </Grid>
          <Grid md={12} item container direction="row" alignItems="flex-start">
            <Entities entity={comic?.creators?.items} title="Criadores:" />
            <Entities entity={comic?.characters?.items} title="Personagens:" />
            <Entities entity={comic?.stories?.items} title="Histórias:" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Comic;
