import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { CompanyName } from '../CompanyName'
import { AspectRatio, Container, Grid, Sheet, Stack } from '@mui/joy'

const googleAnalyticsInstances = [
  { name: 'Instance 1', client_id: 'id_1' },
  { name: 'Instance 2', client_id: 'id_2' },
  { name: 'Instance 3', client_id: 'id_3' },
  { name: 'Instance 4', client_id: 'id_4' },
  { name: 'Instance 5', client_id: 'id_5' },
  { name: 'Instance 6', client_id: 'id_6' },
]

export default function HomePage() {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(12px)',
          // backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
          color: 'white',
        })}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100dvh',
              maxWidth: '100%',
              px: 2,
            }}
          >
            <Box
              component='header'
              sx={{
                py: 3,
                pb: 4,
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                <Typography level='title-lg'>
                  <CompanyName />
                </Typography>
              </Box>
            </Box>
            <Box
              component='main'
              sx={{
                my: 'auto',
                display: 'flex',
                flexDirection: 'column',
                mx: 'auto',
              }}
            >
              <Typography component='h1' content='Instances' />

              <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                gap={2}
              >
                {googleAnalyticsInstances.map((instance) => {
                  console.log('test')
                  return (
                    <Sheet>
                      <AspectRatio
                        variant='outlined'
                        ratio='4/3'
                        key={instance.client_id}
                        sx={{
                          width: 350,
                          bgcolor: 'background.level2',
                          borderRadius: 'md',
                        }}
                      >
                        <Typography level='h2' component='div'>
                          4/3
                        </Typography>
                      </AspectRatio>
                    </Sheet>
                  )
                })}
              </Grid>
            </Box>
            <Box component='footer' sx={{ py: 3 }}>
              <Typography level='body-xs' textAlign='center'>
                © {<CompanyName />} {new Date().getFullYear()}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
