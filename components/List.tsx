import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";
import { Container } from "react-bootstrap";

type Props = {
  items: User[];
};

const List = ({ items }: Props) => (
  <Container>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  </Container>
);

export default List;
