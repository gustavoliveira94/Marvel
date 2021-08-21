import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header>
      <Grid container className={classes.container}>
        <Grid xs={12} item className={classes.logo}>
          <Link href="/">
            <a>
              <Image
                src="/icons/logo.svg"
                alt="Marvel Logo"
                width={130}
                height={50}
              />
            </a>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
