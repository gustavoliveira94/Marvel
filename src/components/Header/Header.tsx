import Image from "next/image";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid md={12} item className={classes.logo}>
                <Image
                    src="/icons/logo.svg"
                    alt="Marvel Logo"
                    width={130}
                    height={50}
                />
            </Grid>
        </Grid>
    );
};

export default Header;
