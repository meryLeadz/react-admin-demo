import { Card, CardContent, Typography, Box } from "@mui/material";
import { ImageField } from "react-admin";



export const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Card sx={{ maxWidth: 400, padding: 2, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h4" component='div' gutterBottom>
                        Welcome to the Dashboard
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Manage your posts ans users efforlessly with the tools provided.
                        Navigate through the menu to get started.
                    </Typography>
                </CardContent>
                <ImageField source="url" title="image test" record={{ url: "image.jpg" }}
                    sx={{ '& img': { maxWidth: 100, maxHeight: 100, objectFit: 'contain' }}}
                />
            </Card>
        </Box>
    );
};
