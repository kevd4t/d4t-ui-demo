import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { Badge } from '@/components/ui'

const MonitoringRoutesMap = () => {
  const initialPosition = { lat: 10.2951745, lng: -67.2647287 }

  const originMarkerPosition = { lat: 10.481458862889902, lng: -68.12522428434946 }

  const destionationPostionMarker = { lat: 10.4844962, lng: -66.8650018 }

  const polylinePositions = [
    { lat: 10.481458862889902, lng: -68.12522428434946 },
    { lat: 10.4844962, lng: -66.8650018 }
  ]

  return (
    <MapContainer center={initialPosition} zoom={10} scrollWheelZoom={true} className='w-full h-full fixed top-0 right-0' style={{ zIndex: 0 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={originMarkerPosition}>
        <Popup className='relative '>
          <img
            src='/images/palito-station.jpg'
            alt='estación origen'
            className='rounded-sm object-cover'
          />

          <div className='absolute top-3.5 right-3.5'>
            <Badge>Surtido</Badge>
          </div>

          <div className='absolute bottom-2 left-2.5 px-2 pb-2 bg-gradient-to-t from-black w-[184px] rounded-sm'>
            <div className=' leading-[8px] text-white text-sm'>
              <span className='font-semibold text-lg'>Estación El Palito</span> <br />
              <span className='text-xs leading-[8px]'>El Palito, Yaracuy</span>
            </div>
          </div>
        </Popup>
      </Marker>

      <Polyline color='#220bb9' positions={polylinePositions} />

      <Marker position={destionationPostionMarker}>
        <Popup className='relative '>
          <img
            src='/images/mercedes-station.jpg'
            alt='estación origen'
            className='rounded-sm object-cover'
          />

          <div className='absolute top-3.5 right-3.5'>
            <Badge>Surtido</Badge>
          </div>

          <div className='absolute bottom-2 left-2.5 px-2 pb-2 bg-gradient-to-t from-black w-[184px] rounded-sm'>
            <div className=' leading-[8px] text-white text-sm'>
              <span className='font-semibold text-lg truncate'>PDV Las Mercedes</span> <br />
              <span className='text-xs leading-[8px]'>Las Mercedes, Caracas</span>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MonitoringRoutesMap
