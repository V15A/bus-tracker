import React, { useState } from "react";
import { Modal, Button, Table, Spinner } from "react-bootstrap";
import { GET_TIMETABLE } from "../queries";
import { useSubscription, useQuery } from "@apollo/client";
import ConvertTime from "../Util/ConvertTime";

/** A popup component that shows timetable for the clicked bus/tram stop */
const TimeTable = ({ stopPoint }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, error, data } = useQuery(GET_TIMETABLE, {
    variables: { id: `tampere:${stopPoint.shortName}` },
  });

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {stopPoint.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{stopPoint.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Route</th>
                <th>Destination</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {data.stop.stoptimesWithoutPatterns.map((departure) => (
                <tr key={departure.realtimeDeparture + departure.trip.gtfsId}>
                  <td>{departure.trip.routeShortName}</td>
                  <td>{departure.headsign}</td>
                  <td>{ConvertTime(departure.realtimeDeparture)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimeTable;
