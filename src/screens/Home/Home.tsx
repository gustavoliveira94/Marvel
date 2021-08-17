import { Grid, Container } from "@material-ui/core";

import CardHome from "components/CardHome";

const cards = [
  {
    name: "Personagens",
    url: "/characters",
    image_url:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg",
  },
  {
    name: "Séries",
    url: "/series",
    image_url:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/wandavision_lob_crd_06.jpg",
  },
  {
    name: "Histórias",
    url: "/stories",
    image_url:
      "https://i.annihil.us/u/prod/marvel/i/mg/f/20/60e5e1d1b5fde/portrait_uncanny.jpg",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="center">
        <h1>Explore:</h1>
      </Grid>
      <Grid
        md={12}
        container
        direction="row"
        justifyContent="center"
        data-testid="content-cards"
      >
        {cards.map((card) => (
          <CardHome
            key={card.name}
            name={card.name}
            image={card.image_url}
            url={card.url}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default HomeScreen;
