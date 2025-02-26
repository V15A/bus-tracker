import { gql } from "@apollo/client";
const GET_TIMETABLE = gql`
  query getTimetable($id: String!) {
    stop(id: $id) {
      name
      stoptimesWithoutPatterns(numberOfDepartures: 10) {
        scheduledDeparture
        realtimeDeparture
        departureDelay
        realtime
        realtimeState
        serviceDay
        headsign
        trip {
          serviceId
          gtfsId
          routeShortName
        }
      }
    }
  }
`;
export { GET_TIMETABLE };
