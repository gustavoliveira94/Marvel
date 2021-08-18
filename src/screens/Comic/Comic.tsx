import { Grid, Container } from "@material-ui/core";

import { IComics } from "services/apis/marvel";

import useStyles from "./styles";

export interface IComicPage {
  comic: IComics;
}

const Comic: React.FC<IComicPage> = ({ comic }) => {
  const classes = useStyles();

  const image = `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`;

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
            {comic?.creators?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Criadores:</h3>
                {comic?.creators?.items.map((creator) => (
                  <div key={creator?.name}>
                    <p>{creator.name}</p>
                    <p>{creator.role}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
            {comic?.characters?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Personagens:</h3>
                {comic?.characters?.items.map((character) => (
                  <div key={character?.name}>
                    <p>{character.name}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
            {comic?.stories?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Histórias:</h3>
                {comic?.stories?.items.map((story) => (
                  <div key={story?.name}>
                    <p>{story.name}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Comic;
