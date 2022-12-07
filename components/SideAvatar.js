import { AvatarGenerator } from "random-avatar-generator";
import { Avatar, Box } from "@chakra-ui/react";
export default function SideAvatar() {
  const generator = new AvatarGenerator();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Avatar src={generator.generateRandomAvatar("avatar")} />
    </Box>
  );
}
