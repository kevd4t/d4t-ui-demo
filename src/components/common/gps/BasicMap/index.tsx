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
        <Popup className='relative '>
          <img
            src='/images/estacion-origen.png'
            alt='estacion origen'
            className='rounded-sm  object-cover'
          />

          <div className='absolute top-3.5 right-3.5'>
            <Badge>Almacenamiento</Badge>
          </div>

          <div className='absolute bottom-2 left-2.5 px-2 pb-2 bg-gradient-to-t from-black w-[184px] rounded-sm'>
            <div className=' leading-[8px] text-white text-sm'>
              <span className='font-semibold text-lg'>Estacion Palito</span> <br />
              <span className='text-xs leading-[8px]'>Las Mercedes, Caracas</span>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default BasicMap
