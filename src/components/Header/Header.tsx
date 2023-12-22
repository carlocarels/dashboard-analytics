import { Box, Typography } from '@mui/joy'
import { CompanyName } from '../CompanyName/CompanyName'

export function Header() {
  return (
    <Box
      component='header'
      sx={{
        pt: 4,
        pb: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography level='title-lg' data-testid='company-name'>
          <CompanyName />
        </Typography>
      </Box>
    </Box>
  )
}
