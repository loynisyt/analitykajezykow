import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Code } from '@mui/icons-material';
import "../themes.css";

import jsscreenshot from '../../assets/screen2.png';

const PythonPage = () => {
  return (

    <Box className="python-page">
      <Box className="python-header">
        <Code className="python-icon" />
        <Typography variant="h3" className="page-title">
          <h1 className='title is-2 has-text-white' > Analiza Python</h1>
        </Typography>
      </Box>

      <Grid container spacing={4} className="page-grid">
        <Grid item xs={12} md={6}>
          <Card className="theme-card python-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
              <h1 className='title is-4 has-text-white mt-3 mb-3'> Statystyki i trendy</h1>
              </Typography>
              <Typography className="card-text">
               <p>
    Python jest jednym z najbardziej utytułowanych języków w historii indeksu, zdobywając nagrodę Języka Roku TIOBE sześć razy.<br></br>
  </p>

  <ul>
    <li>Lut 2003 - Pozycja #13 - spadek (historyczny): najniższa pozycja od 2001 roku.</li>
    <li>2007 - Język Roku TIOBE - wzrost: pierwsza nagroda „Programming Language of the Year”.</li>
    <li>2010 - Język Roku TIOBE - wzrost.</li>
    <li>2018 - Język Roku TIOBE - wzrost.</li>
    <li>2020 - Język Roku TIOBE - wzrost.</li>
    <li>2021 - Język Roku TIOBE - wzrost.</li>
    <li>2024 - Język Roku TIOBE - wzrost: ostatnie zwycięstwo.</li>
    <li>2025 (średnia roczna) - Pozycja #1 - wzrost / szczyt: Python zajmuje 1. pozycję w zestawieniu średnich rocznych.</li>
    <li>Listopad 2025 - Pozycja #1 - szczyt (historyczny): najwyższa pozycja od 2001 roku.</li>
    <li>Listopad 2025 vs Listopad 2024 - Rating: 23.37% (+0.52%) - porównanie rok do roku.</li>
  </ul>

  <h3 className="title is-5 has-text-white mt-3 mb-3">Trendy w świecie Pythona</h3>
  <p>
    W listopadzie 2025 roku Python utrzymuje pozycję nr 1. Jednak tempo wzrostu wyhamowało, co sugeruje plateau popularności.<br></br>
    Najszybciej rośnie język C#, który może zostać Językiem Roku 2025.<br></br>
    Kluczowe trendy w najnowszych wersjach Pythona:
  </p>
  <ul>
    <li>Wydajność: Python 3.11 jest 10–60% szybszy niż 3.10, a 3.14 wprowadza opcjonalny szybszy interpreter (+3–5%).</li>
    <li>Kompilacja JIT: Python 3.13 dodał eksperymentalny kompilator Just-In-Time.</li>
    <li>Standaryzacja kodowania znaków: Python 3.15 uczyni UTF-8 domyślnym, co poprawia kompatybilność wieloplatformową.</li>
  </ul>
  <h2 className='title is-5 has-text-white mt-3 mb-3'>Zastosowania Pythona</h2>
  <ul>
    <li>Analiza danych i nauka o danych: biblioteki takie jak Pandas, NumPy, Matplotlib, Seaborn.</li>
    <li>Uczenie maszynowe i sztuczna inteligencja: TensorFlow, Keras, PyTorch, Scikit-learn.</li>
    <li>Rozwój aplikacji webowych: Django, Flask, FastAPI.</li>
    <li>Automatyzacja i skrypty: automatyzacja zadań systemowych, web scraping (BeautifulSoup, Scrapy).</li>
    <li>Tworzenie aplikacji desktopowych: Tkinter, PyQt, Kivy.</li>
  </ul>

              </Typography>
            
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="theme-card python-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
               <h1 className='title is-4 has-text-white mt-3 mb-3'> Historia jezyka</h1>
              </Typography>
              <Typography className="card-text">

                <h3 className="title is-5 has-text-white mt-3 mb-3">Początki i cel</h3>
  <ul>
    <li>Python został stworzony przez Guido van Rossuma pod koniec lat 80. w CWI, Holandia.</li>
    <li>Cel: zastąpienie języka ABC, obsługa wyjątków i interfejs z systemem Amoeba.</li>
    <li>Nazwa: od brytyjskiego programu "Monty Python's Flying Circus".</li>
    <li>BDFL: Guido van Rossum pełnił funkcję „Benevolent Dictator for Life” do 12 lipca 2018 r.</li>
  </ul>

  <h3 className="title is-5 has-text-white mt-5 mb-5">Ważne wydania i ewolucja</h3>
  <ul>
    <li>Lut 1991 (0.9.1) - pierwsza publiczna wersja z klasami, obsługą wyjątków, podstawowymi typami (list, dict, str).</li>
    <li>Sty 1994 (1.0) - dodano programowanie funkcyjne: lambda, map, filter, reduce.</li>
    <li>1995 - prace w CNRI, inicjatywa CP4E: uczynienie programowania bardziej dostępnym.</li>
    <li>Paź 2000 (2.0) - list comprehensions, cycle-detecting GC, wsparcie Unicode, bardziej przejrzysty proces rozwoju.</li>
    <li>Gru 2001 (2.2) - unifikacja typów i klas, generatory.</li>
    <li>Wrz 2006 (2.5) - wprowadzenie instrukcji with (menedżer kontekstu).</li>
    <li>Paź 2008 (2.6) - wersja równoległa do 3.0, tryb ostrzegawczy o funkcjach usuniętych.</li>
    <li>Gru 2008 (3.0) - Python 3000 / Py3K: print jako funkcja, zunifikowane typy int/long, zmiana dzielenia całkowitego, narzędzie 2to3.</li>
    <li>Sty 2020 - zakończenie wsparcia Python 2.7.</li>
    <li>Wrz 2015 (3.5) - moduł typing, async/await.</li>
    <li>Gru 2016 (3.6) - f-strings.</li>
    <li>Paź 2021 (3.10) - strukturalne dopasowywanie wzorców (match/case).</li>
    <li>Paź 2022 (3.11) - ulepszenia wydajności 10–60%.</li>
    <li>Paź 2024 (3.13) - eksperymentalny JIT, możliwość wyłączenia GIL, pełne wsparcie wydłużone do 2 lat.</li>
    <li>Paź 2025 (3.14) - nowy, szybszy interpreter (opcjonalny), najnowsza stabilna wersja.</li>
  </ul>

 
<h3 className='title is-5 has-text-white mt-5'>Przydatne linki</h3>
              </Typography>
              <a href="https://en.wikipedia.org/wiki/History_of_Python" className='button is-link mr-2' target="_blank" rel="noopener noreferrer">Historia Pythona</a>
              <a href="https://www.tiobe.com/tiobe-index/python" className='button is-link ml-2' target="_blank" rel="noopener noreferrer">Python informacje Tiobe</a>
            </CardContent>
          </Card>
        </Grid>

       

        <Grid item xs={12}>
          <Card className="theme-card python-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Diagramy
              </Typography>
              <Typography className="card-text">
                <img src={jsscreenshot} alt="Python Diagram" className='python-diagram' />
                     <h2 className='title is-5 has-text-white mt-3 mb-3'>Wnioski</h2>
                • Python utrzymuje pozycję nr 1, ale wzrost popularności wyhamował.<br></br>
                • Jest to najbardziej elastyczny język programowania, używany w różnych dziedzinach, od analizy danych po rozwój aplikacji webowych.<br></br>
                • Społeczność Pythona jest ogromna i aktywna, co przyczynia się do ciągłego rozwoju bibliotek i narzędzi.<br></br>
                • Wzrost zainteresowania sztuczną inteligencją i uczeniem maszynowym napędza dalszą popularność Pythona.<br></br>
              </Typography>
              
           
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

  );
};

export default PythonPage;
