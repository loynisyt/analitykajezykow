import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { LocalCafe } from '@mui/icons-material';
import "../themes.css";


import javascreenshot from '../../assets/screen1.png';

const JavaPage = () => {
  return (

    <Box className="java-page">
      <Box className="java-header">
        <LocalCafe className="java-icon" />
        <Typography variant="h3" className="page-title">
          <h1 className='title is-2 has-text-white' > Analiza Java</h1>
        </Typography>
      </Box>

      <Grid container spacing={4} className="page-grid">
        <Grid item xs={12} md={6}>
          <Card className="theme-card java-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
              <h1 className='title is-4 has-text-white mt-3 mb-3'> Statystyki i trendy</h1>
              </Typography>
              <Typography className="card-text">
               •	Dominowała w 2010 i 2015 (#1), obecnie #4. <br></br>
•	Wciąż silna w aplikacjach korporacyjnych, ale spadek wynika z konkurencji Pythona i zmian w architekturze systemów.
<h2 className='title is-5 has-text-white mt-3 mb-3 '>Popularne frameworki i narzędzia:</h2>
•	Spring, Hibernate, Maven, Jenkins, JUnit. <br></br>
•	Silne wsparcie dla mikroserwisów (Spring Boot). <br></br>
•	Rozwój narzędzi chmurowych (AWS, Azure). <br></br>
<h2 className='title is-5 has-text-white mt-3 mb-3 '>Zastosowania:</h2> 
•	Aplikacje korporacyjne, backend, Android. <br></br>
•	Rozwój dużych systemów złożonych. <br></br>
<h2 className='title is-5 has-text-white mt-3 mb-3 '>Kluczowe wydarzenia i zmiany wersji:</h2>
•	Java: SE 1.0 (1996), 
• SE 5.0 (2004), 
•	Java 8 (2014) – Lambdy, Stream API. <br></br>
•	Java 9 (2017) – System modułów. <br></br>
•	Regularne wydania co 6 miesięcy od Java 10. <br></br>
<h2 className='title is-5 has-text-white mt-3 mb-3 '>Trendy:</h2>
•	Rosnące zainteresowanie mikroserwisami i chmurą. <br></br>
•	Ewolucja w kierunku nowoczesnych paradygmatów programowania. <br></br>
• Zwiekszony uzytek urzadzen mobilnych i tabletow



              </Typography>
             
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="theme-card java-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
               <h1 className='title is-4 has-text-white mt-3 mb-3'> Historia jezyka</h1>
              </Typography>
              <Typography className="card-text">
                <h1 className='title is-5 has-text-white mt-3 mb-3 '>Java	1996</h1>
                - 1996: Java stworzona przez Sun Microsystems, pierwotnie jako język do urządzeń elektronicznych.<br></br>
               - 2004: konkurencja z innymi jezykami sprawila spadek popularnosci<br></br>
- 2004-5: Wydanie Java SE 5 z kluczowymi funkcjami: generyki, enums, metadata annotations Wzrorst popularnosci <br></br>
- 2004-2013: Stabilny rozwój i utrzymanie pozycji w czołówce TIOBE, spadki w niektórych miesiącach spowodowane konkurencją z C#, Pythonem i JavaScriptem.Stopniowe lekkie spadki<br></br>
- 2014-15: Wydanie Java SE 8 z lambdami i Stream API – nowy wzrost popularności języka, szczególnie w projektach enterprise i backend.<br></br>
- 2017: Wydanie Java 9 z systemem modułów – początek regularnych wydań co 6 miesięcy.<br></br>
- 2018-2020: Stabilizacja popularności, utrzymanie pozycji w top 5 TIOBE. Wzrost zainteresowania mikroserwisami i chmurą.<br></br>
- 2020-2024: Spadek popularności na rzecz Pythona i JavaScriptu, ale wciąż silna pozycja w aplikacjach korporacyjnych i Androidzie.<br></br>
- 2025: Przewidywany dalszy rozwój w kierunku nowoczesnych paradygmatów programowania i integracji z chmurą.<br></br> 
              </Typography>
              <h2 className='title is-5 has-text-white mt-3 mb-2'>Przydatne linki:</h2>
              <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener noreferrer" className='button is-danger mt-3'>     View TIOBE Index</a>
              <a href='https://en.wikipedia.org/wiki/Java_(programming_language)' target='_blank' rel='noopener noreferrer' className='button  is-danger mt-3 ml-3'> View Java History</a>
             
            </CardContent>
          </Card>
        </Grid>

    

        

        <Grid item xs={12}>
          <Card className="theme-card java-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Diagram
              </Typography>
              <Typography className="card-text">
                <img src={javascreenshot} alt="Java Diagram" className='java-diagram' />
                <h2 className='title is-4 has-text-white mt-3 mb-3'>Wnioski</h2>
          Java: wciąż popularna w enterprise, spadek pozycji z powodu konkurencji i nowych trendów w architekturze aplikacji.
              </Typography>
           
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
        
  );
};

export default JavaPage;
