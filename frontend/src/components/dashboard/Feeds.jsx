import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Vitamin C",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
  {
    title: "Vitamin B",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
  {
    title: "Omega-3 Fish Oil",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
  {
    title: "Fish oli",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
  {
    title: "ยาดมสมุนไพร",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
  {
    title: "น้ำมันเขียว",
    icon: "bi bi-bag-check",
    color: "primary",
    Rec: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Best selling products</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          สินค้าขายดี
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.Rec}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
