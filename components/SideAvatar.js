import React from "react";
import { Avatar, Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
export default function SideAvatar({ name, image }) {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Avatar name={session.user.name} src={session.user.image} />
    </Box>
  );
}
