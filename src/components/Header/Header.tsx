import { Box } from '@mui/joy'
import { Logo } from '../Logo/Logo'

export function Header() {
  return (
    <Box
      component='header'
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 4,
        pb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ ml: 'auto' }}>Right</Box>
    </Box>
  )
}
