import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
  backgroundColor: "red",
});

export default function Home() {
  return <MyButton>Cek</MyButton>;
}
