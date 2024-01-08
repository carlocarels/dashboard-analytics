import { Box, Container } from '@mui/joy'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

export type LayoutDefaultProps = {
  children?: React.ReactNode
}

export function LayoutDefault(props: LayoutDefaultProps) {
  const { children } = props
  return (
    <Box
      sx={{
        // backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        color: '#15252d',
        backgroundCOlor: '#d0d7d6',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            maxWidth: '100%',
          }}
        >
          <Header />
          <Box component='main' sx={{ margin: 'auto' }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  )
}
