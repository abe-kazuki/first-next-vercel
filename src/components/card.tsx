'use client';
import {FC} from 'react';
import { Card, Text } from "@nextui-org/react";

export type Props = {
  title: String;
}

export const MyCard: FC<Props> = (prop) => {
  return (
    <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text>{prop.title}テストですよ！</Text>
      </Card.Body>
    </Card>
  );
}