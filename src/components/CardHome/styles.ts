import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 20,
    padding: 20,
  },
  card: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },
  figure: {
    height: 395,
    borderBottom: "4px solid #e62429",
    margin: 0,
  },
  avatar: {
    objectFit: "cover",
  },
  contentTitle: {
    backgroundColor: "#202020",
    padding: 20,
    height: 60,
  },
  title: {
    margin: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textDecoration: "none",
  },
}));

export default useStyles;
