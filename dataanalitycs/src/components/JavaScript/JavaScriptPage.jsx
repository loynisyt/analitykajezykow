import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Javascript } from '@mui/icons-material';
import "../themes.css";
import jsscreenshot from '../../assets/screen3.png';

const JavaScriptPage = () => {
  return (

    <Box className="javascript-page">
      <Box className="javascript-header">
        <Javascript className="javascript-icon" />
        <Typography variant="h3" className="page-title">
          <h1 className='title is-2 has-text-white' > Analiza JavaScript</h1>

        </Typography>
      </Box>

      <Grid container spacing={4} className="page-grid">
        <Grid item xs={12} md={6}>
          <Card className="theme-card javascript-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
              <h1 className='title is-4 has-text-white mt-3 mb-3'> Statystyki i trendy</h1>

  
              </Typography>
              <Typography className="card-text">
                               <p className='title is-6 has-text-white'>
    JavaScript (JS) jest językiem skryptowym i wieloparadygmatowym, stanowiącym podstawową technologię do tworzenia stron internetowych.<br></br>
  </p>
<h3 className="title is-4 has-text-white mt-3 mb-3">Najważniejsze statystyki i zdarzenia JavaScript</h3>
  <ul>
    <li>Paź 2014 - Pozycja #12 - spadek (historyczny): najniższa pozycja od 2001 roku.</li>
    <li>2014 - Język Roku TIOBE - wzrost: JavaScript otrzymał nagrodę "Programming Language of the Year".</li>
    <li>Listopad 2025 - Pozycja #6 - szczyt historyczny: najwyższa pozycja od 2001 roku.</li>
    <li>Listopad 2025 - Rating 3.42% - spadek roczny o -0.29% w porównaniu do poprzedniego roku.</li>
    <li>2010 (średnia roczna) - Pozycja #11 - wzrost: znaczący progres do obecnej pozycji #6 w 2025 roku.</li>
  </ul>

  <h3 className="title is-4 has-text-white mt-3 mb-3">Trendy i dążenia (Wzlot i Odrodzenie)</h3>
  <p className='title is-6 has-text-white'>
    Chociaż dane TIOBE z listopada 2025 skupiają się na dominacji Pythona i wzroście C#, historyczne trendy wskazują na wzlot JavaScriptu, który stał się wszechobecny.<br></br>
    Kluczowe elementy odrodzenia JS:
  </p>
  <ul>
    <li>AJAX i dynamiczność stron: pojawienie się AJAX w 2005 umożliwiło tworzenie dynamicznych stron z asynchronicznymi wywołaniami serwerowymi.</li>
    <li>Unifikacja i biblioteki: Prototype, jQuery, Mootools, Dojo ułatwiły pracę z DOM i przyspieszyły rozwój.</li>
    <li>Wydajność silników: Google V8 przyspieszył działanie JS w Chrome i stał się fundamentem dla Node.js.</li>
    <li>Dominacja poza przeglądarką: Node.js pozwala uruchamiać JS po stronie serwera oraz w aplikacjach GUI (Electron).</li>
    <li>Platforma dla innych języków: transpilatory (TypeScript, Dart, CoffeeScript) oraz asm.js umożliwiają uruchamianie kodu z innych języków w JS.</li>
    <li>Nowoczesne frameworki: React, Angular, Vue.js,  Next.js zrewolucjonizowały rozwój front-endu.</li>
  </ul>
  
  
  
            </Typography>
            
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="theme-card javascript-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
               <h1 className='title is-4 has-text-white mt-3 mb-3'> Historia jezyka</h1>
              </Typography>
              <Typography className="card-text">
  <h3 className="title is-4 has-text-white mt-3 mb-3">Początki (Mocha, LiveScript, JavaScript)</h3>
  <ul>
    <li>1993/1994 - Tło: po pojawieniu się NCSA Mosaic, twórcy stworzyli Netscape Navigator i szukali sposobu na większą interaktywność stron WWW.</li>
    <li>Maj 1995 - Brendan Eich stworzył JavaScript w 10 dni, łącząc elementy Javy, Scheme i Self.</li>
    <li>Pierwotne nazwy: Mocha → LiveScript → JavaScript (4 grudnia 1995, Netscape Navigator 2.0).</li>
    <li>Wczesne cechy: model obiektowy oparty na prototypach (wpływ Self).</li>
  </ul>

  <h3 className="title is-4 has-text-white mt-3 mb-3">Standaryzacja i ewolucja (ECMAScript)</h3>
  <ul>
    <li>1996 - ECMA rozpoczęła pracę nad standaryzacją JS.</li>
    <li>1997 - ECMAScript (ECMA-262) jako nadzbiór JS.</li>
    <li>Paź 1997 - JScript 3.0 w IE4 częściowo implementował ES1.</li>
    <li>1999 - ES3: wyrażenia regularne, do-while, try/catch, wyjątki; wsparcie we wszystkich ważnych przeglądarkach.</li>
    <li>ES4 - wstrzymane, rozwój sparaliżowany prawie na dekadę (wykorzystany w ActionScript/Flash).</li>
    <li>2011 - ES5: JSON, getter/setters, strict mode.</li>
    <li>2015 - ES6/ES2015: zmiana nazewnictwa, wydania co roku, wbudowane podklasy, Unicode, domyślne argumenty funkcji.</li>
    <li>Od 2016 - nowe funkcje: Object.values, Object.entries, asynchroniczne iteratory.</li>
    <li>Czerwiec 2024 - stabilna wersja ECMAScript 2024.</li>
  </ul>

<h3 className='title is-4 has-text-white mt-3'>Zastosowanie Javascript</h3>
  <ul>  
    <li>Tworzenie interaktywnych stron internetowych (frontend).</li>
    <li>Rozwój aplikacji serwerowych (Node.js).</li>
    <li>Tworzenie aplikacji mobilnych (React Native, Ionic).</li>
    <li>Tworzenie aplikacji desktopowych (Electron).</li>
    <li>Tworzenie gier (Phaser, Babylon.js).</li>
  </ul>

<h3 className='title is-5 has-text-white mt-5'>Przydatne linki</h3>
              <a href="https://www.tiobe.com/tiobe-index/javascript" className='button is-warning is-outlined ml-2' target="_blank" rel="noopener noreferrer">Wykres danych Tiobe Detale</a>
              <a href="https://bulldogjob.pl/readme/wzloty-i-upadki-historia-javascript" className='button is-warning is-outlined ml-2' target="_blank" rel="noopener noreferrer">Historia JavaScript</a>

  
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>

      


        <Grid item xs={12}>
          <Card className="theme-card javascript-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Diagrams
              </Typography>
              <Typography className="card-text">
                <img src={jsscreenshot} alt="JavaScript Diagram" className='javascript-diagram' />
                <h2 className='title is-2 has-text-white mb-3 mt-3'>Wnioski</h2>
                JavaScript pozostaje kluczowym językiem w rozwoju webowym, ale stoi przed wyzwaniami ze strony nowych technologii i frameworków. Jego elastyczność i wszechstronność zapewniają mu trwałą obecność w ekosystemie programistycznym. Opiera sie na nim wiele jezykow i frameworkow takich jak TypeScript, React, Vue.js czy Node.js.
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

  );
};

export default JavaScriptPage;
