import React from "react";
import { Table, Spinner, ListGroup } from "react-bootstrap";
import { GET_TIMETABLE } from "../queries";
import { useQuery } from "@apollo/client";
import ConvertTime from "../Util/ConvertTime";

/** A popup component that shows timetable for the clicked bus/tram stop */
const TimeTable = ({ stopPoint }) => {
  const { loading, error, data } = useQuery(GET_TIMETABLE, {
    variables: { id: `tampere:${stopPoint.shortName}` },
  });

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <p>Error :(</p>;

  return (
    <ListGroup className="timetable-container">
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
    </ListGroup>
  );
};

export default TimeTable;
