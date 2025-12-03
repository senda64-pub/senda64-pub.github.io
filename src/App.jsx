import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import projects from "./links";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#111827",
    },
    primary: {
      main: "#38bdf8",
    },
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Lab
        </Typography>

        <Typography variant="body1" color="gray" mb={4}>
          Works / Experiments / Playground
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "#111827",
                }}
              >
                <CardActionArea
                  href={project.link}
                  target="_blank"
                  sx={{ height: "100%" }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
