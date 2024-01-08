import { AvatarGroup, Avatar, Link } from '@mui/joy'

export function Logo() {
  return (
    <Link href='/' underline='none' >
      <AvatarGroup>
        <Avatar>D</Avatar>
        <Avatar>A</Avatar>
      </AvatarGroup>
    </Link>
  )
}
