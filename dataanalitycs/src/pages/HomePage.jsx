import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Code, LocalCafe, Javascript, Terminal } from '@mui/icons-material';

const HomePage = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: 'Percepcja',
      color: '#3776ab',
      path: '/percepcja',
    },
    {
      title: 'Funkcjonalnosc',
      color: '#ed8b00',
      path: '/funkcjonalnosc',
    },
    {
      title: 'Zrozumialosc',
      color: '#f7df1e',
      path: '/zrozumialosc',
    },
    {
      title: 'Rzetelnosc',
      color: '#2fb823',
      path: '/rzetelnosc',
    }

  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          mb: 4,
          textAlign: 'center',
          textShadow: '0 0 20px rgba(255,255,255,0.5)',
        }}
      >
        Zasady WCAG
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: 800 }}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Card
              onClick={() => navigate(item.path)}
              sx={{
                background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${item.color}50`,
                boxShadow: `0 8px 32px ${item.color}30`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
                minHeight: 200,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px) rotate(2deg)',
                  boxShadow: `0 16px 64px ${item.color}50`,
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                {item.icon}
                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    mt: 2,
                    textShadow: `0 0 10px ${item.color}`,
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
