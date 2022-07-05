import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import "./Help.css";

const Help = () => {

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="help"> Helping page </div>
      </ThemeProvider>
    </div>
  );
};

export default Help;
