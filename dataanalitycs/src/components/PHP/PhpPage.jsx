import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Terminal } from '@mui/icons-material';
import "../themes.css";

import phpscreenshot from '../../assets/screen4.png';

const PhpPage = () => {
  return (

    <Box className="php-page">
      <Box className="php-header">
        <Terminal className="php-icon" />
        <Typography variant="h3" className="page-title">
          <h1 className='title is-2 has-text-white' > Analiza PHP</h1>
        </Typography>
      </Box>

      <Grid container spacing={5} className="page-grid">
        <Grid item xs={12} md={6}>
          <Card className="theme-card php-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
              <h1 className='title is-4 has-text-white mt-3 mb-3'> Statystyki i trendy</h1>
              </Typography>
              <Typography className="card-text">
 <h3 className='title is-5 has-text-white mt-3 mb-3'>Najważniejsze statystyki i zdarzenia PHP</h3>
  <ul>
    <li>2004 - Język Roku TIOBE - wzrost / szczyt: PHP otrzymało nagrodę "Programming Language of the Year".</li>
    <li>2010 - Pozycja #3 - szczyt historyczny: najwyższa pozycja, jaką PHP osiągnęło w indeksie od 2001 roku.</li>
    <li> 2024 - Pozycja #17 - spadek historyczny: najniższa pozycja od 2001 roku.</li>
    <li> 2025 - Pozycja #16 - spadek roczny, rating 1.31% (-0.16% w porownaniu do Października 2024).</li>
  </ul>
  
   <p className='title is-6 has-text-white mt-6 mb-6'>
    Uwaga: Chociaż PHP było Językiem Roku TIOBE w 2004 roku, nie znajduje się w historycznym zestawieniu 10 najlepszych języków z lat 1985–2025 (średnie roczne).
  </p>

 <h3 className='title is-5 has-text-white mt-3 mb-3'>Obecne trendy w świecie programowania</h3>
  <ul>
    <li>Plateau Pythona: Python utrzymuje pozycję nr 1, ale wzrost popularności wyhamował.</li>
    <li>Wzrost C#. Jezyk ten pnie sie do gory z kazdym dniem</li>
    <li>Rywalizacja C# i Java: obecnie mają niemal równe udziały w indeksie TIOBE (różnica mniej niz 1%).</li>
  </ul>
  <h3 className='title is-5 has-text-white mt-3 mb-3'> Zastosowanie</h3>
  PHP jest szeroko stosowany w tworzeniu stron internetowych i aplikacji webowych. Popularne platformy CMS, takie jak WordPress, Joomla i Drupal, są oparte na PHP. Mimo spadku popularności, PHP nadal obsługuje dużą część internetu dzięki swojej prostocie i szerokiemu ekosystemowi narzędzi.

                </Typography>
          
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="theme-card php-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
  <h2 className='title is-5 has-text-white mt-3 mb-3'> Historia Języka PHP</h2>
              </Typography>
              <Typography className="card-text">
 

  <h3 className='title is-5 has-text-white mt-3 mb-3'>Początki i wczesna ewolucja</h3>
  <ul >
    <li> 1994 - Powstanie PHP przez Rasmusa Lerdorfa: prosty zestaw binariów CGI do śledzenia wizyt na jego CV, nazwa "Personal Home Page Tools".</li>
    <li>Czerwiec 1995 - Publiczne udostępnienie kodu PHP Tools.</li>
    <li>Wrzesień 1995 - PHP/FI (Forms Interpreter): podstawowe funkcje, składnia osadzona w HTML, zmienne podobne do Perla.</li>
    <li>Październik 1995 - PHP Construction Kit: całkowicie przepisany kod, struktura przypominająca C.</li>
    <li>Kwiecień 1996 - PHP/FI 2.0: wbudowane wsparcie dla DBM, mSQL, Postgres95, ciasteczek i funkcji użytkownika.</li>
    <li>Listopad 1997 - PHP/FI 2.0 beta zakończone; popularność rośnie – 60 000 domen do maja 1998.</li>
  </ul>

  <h3 className='title is-5 has-text-white mt-3 mb-3'>Kluczowe wersje PHP</h3>
  <ul>
    <li>PHP 3.0 (czerwiec 1998) - nowy parser, PHP: Hypertext Preprocessor, wsparcie dla OOP, rozszerzalność, ~10% serwerów.</li>
    <li>PHP 4.0 (maj 2000) - Zend Engine, lepsza wydajność, sesje HTTP, buforowanie wyjścia.</li>
    <li>PHP 5 (lipiec 2004) - Zend Engine 2.0, nowy model obiektowy, dziesiątki nowych funkcji.</li>
    <li>PHP 6 - anulowane; niektóre funkcje w PHP 5.3/5.4.</li>
    <li>PHP 7.0 (2015) - Zend Engine 3.0, dwukrotnie szybsze niż PHP 5.6, operator ??, klasy anonimowe, typowane właściwości i deklaracje typów (7.2–7.4).</li>
    <li>PHP 8.0 (2020) - nazwy argumentów, typy unii, atrybuty, operator nullsafe, JIT, fibers (8.1), klasy readonly (8.2), typowane stałe klas (8.3).</li>
  </ul>


              </Typography>
              <a href="https://en.wikipedia.org/wiki/PHP" className='button is-link' target="_blank" rel="noopener noreferrer">Php informacje</a>
              <a href='https://www.tiobe.com/tiobe-index/php' className='button is-link ml-3' target='_blank' rel='noopener noreferrer'>View TIOBE PHP Stats</a>
            </CardContent>
          </Card>
        </Grid>

      

   

        <Grid item xs={12}>
          <Card className="theme-card php-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Diagramy
              </Typography>
              <Typography className="card-text">
                <img src={phpscreenshot} alt="PHP Diagram" className='php-diagram' />
                 <h2 className='title is-5 has-text-white mt-3 mb-2'>Wnioski</h2>
          PHP: popularny w web development, ale traci na rzecz nowoczesnych technologii i frameworków. Wyzbycie sie go jednak jest niemozliwe ze wzgledu na ogromna baze kodu i istniejace systemy oparte na PHP WordPress, Drupal.
              </Typography>
             
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

  );
};

export default PhpPage;
