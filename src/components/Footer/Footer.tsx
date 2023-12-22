import { Box, Typography } from '@mui/joy'
import { CompanyName } from '../CompanyName/CompanyName'

export function Footer() {
  return (
    <Box component='footer' sx={{ py: 3 }}>
      <Typography level='body-xs' textAlign='center'>
        © {<CompanyName />} {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}
