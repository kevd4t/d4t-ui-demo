import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { Badge } from '@/components/ui'

const BasicMap = () => {
  const initialPosition = { lat: 10.4985458, lng: -66.8510023 }
  const markerPosition = { lat: 10.483191, lng: -66.861999 }

  return (
    <MapContainer center={initialPosition} zoom={10} scrollWheelZoom={true} className='w-full h-full fixed top-0 right-0' style={{ zIndex: 0 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={markerPosition}>
        <Popup className='relative'>
          <img
            src='/images/estacion-origen.png'
            alt='estacion origen'
            className='rounded-sm  object-cover'
          />

          <div className='absolute top-3 right-3.5'>
            <Badge>Almacenamiento</Badge>
          </div>

          <div className='absolute bottom-3 left-4'>
            <span className='font-semibold text-white text-lg'>Estacion Palito</span> <br />
            <span className='font-semibold text-white text-sm'>Las Mercedes, Caracas</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default BasicMap
