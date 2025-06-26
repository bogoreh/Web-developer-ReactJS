import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
          <CircularProgress />
        </Box>
      ) : (
        user && (
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={user.picture.large}
              alt="Random User"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name.title} {user.name.first} {user.name.last}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {user.location.city}, {user.location.country}
              </Typography>
              <Button
                variant="contained"
                onClick={fetchUser}
                sx={{ mt: 2 }}
              >
                Fetch New User
              </Button>
            </CardContent>
          </Card>
        )
      )}
    </Container>
  );
};

export default App;
