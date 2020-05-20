import React from 'react'
import {TrackingServiceConsumer} from '../tracking-service-context'
const withTrackingService = () => Wrapped => {
  return props => {
    return(
      <TrackingServiceConsumer>
        {
          trackingService => {
            return(
              <Wrapped {...props}
              trackingService={trackingService} />
            )
          }
        }
      </TrackingServiceConsumer>
    )
  }
}
export default withTrackingService;