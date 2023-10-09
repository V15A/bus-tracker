import gql from "graphql-tag";
const GET_TIMETABLE = gql`
  subscription getTimetable($id: String!) {
    stop(id: "tampere:4010") {
      name
      stoptimesWithoutPatterns {
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
