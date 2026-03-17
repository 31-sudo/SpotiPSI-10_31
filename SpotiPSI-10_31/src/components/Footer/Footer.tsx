import useStyles from "./FooterStyles";

const Footer:React.FC = () => {
    const { classes } = useStyles();
    return(
        <div className={classes.footer}>נגן מוזיקה</div>
    );
}
export default Footer;