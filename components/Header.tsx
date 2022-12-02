'use client';
// import Link from 'next/link';
import { Navbar,Text } from "@nextui-org/react";


export default function Header() {
  return (
    <header>
      <Navbar isBordered variant="static">
      <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Starwars FanPage
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight>
        <Navbar.Link color="inherit" href="/">
            Home
          </Navbar.Link>
          <Navbar.Link color="inherit" href="/people">
            Character
          </Navbar.Link>
          {/* <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
          <Navbar.Link color="inherit" href="/planet">
            Planets
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}