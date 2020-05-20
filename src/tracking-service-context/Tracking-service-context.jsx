import React from 'react'

const {
  Provider: TrackingServiceProvider,
  Consumer: TrackingServiceConsumer
} = React.createContext(null);

export {
  TrackingServiceProvider,
  TrackingServiceConsumer
}