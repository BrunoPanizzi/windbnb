import { useState, useEffect, useRef } from 'react'

import search_white from '../../assets/search_white.svg'
import marker from '../../assets/marker.svg'

import { useSearch } from '../../context/SearchContext'

import { BigInputContainer, Overlay } from './styles'

import Input from '../Input'
import NumberSelect from '../NumberSelect'

const places = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland',
]

function BigSearch({ onClose, guests, setGuests }) {
  const totalGuests = guests.adults + guests.children

  const { location, setLocation } = useSearch()

  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 630px)').matches
  )
  const [focus, setFocus] = useState()

  const container = useRef()
  const locationInp = useRef()
  const guestsInp = useRef()

  const handleClose = e => {
    if (!container.current.contains(e.target)) {
      onClose()
    }
  }

  useEffect(() => {
    window
      .matchMedia('(max-width: 630px)')
      .addEventListener('change', e => setIsMobile(e.matches))
    locationInp.current.addEventListener('focus', () => setFocus('location'))
    guestsInp.current.addEventListener('focus', () => setFocus('guests'))
  }, [])

  return (
    <Overlay onClick={handleClose}>
      <BigInputContainer ref={container}>
        <div className="inputs">
          <Input
            placeholder="Add location"
            label="Location"
            innerRef={locationInp}
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <Input
            readOnly
            placeholder="Add guests"
            label="Guests"
            innerRef={guestsInp}
            value={
              totalGuests === 0
                ? ''
                : totalGuests === 1
                ? totalGuests + ' guest'
                : totalGuests + ' guests'
            }
          />
          {!isMobile && (
            <button onClick={onClose}>
              <img src={search_white} />
              search
            </button>
          )}
        </div>
        {focus === 'location' && (
          <div className="location">
            {places.map(name => (
              <div
                onClick={() => setLocation(name)}
                key={name}
              >
                <img src={marker} />
                {name}
              </div>
            ))}
          </div>
        )}
        {focus === 'guests' && (
          <div className="guests">
            <NumberSelect
              title="Adults"
              subtitle="Ages 13 or above"
              value={guests.adults}
              increment={() => setGuests(p => ({ ...p, adults: p.adults + 1 }))}
              decrement={() =>
                setGuests(p => ({
                  ...p,
                  adults: p.adults === 0 ? 0 : p.adults - 1,
                }))
              }
            />
            <NumberSelect
              title="Children"
              subtitle="Ages 2 - 12"
              value={guests.children}
              increment={() =>
                setGuests(p => ({ ...p, children: p.children + 1 }))
              }
              decrement={() =>
                setGuests(p => ({
                  ...p,
                  children: p.children === 0 ? 0 : p.children - 1,
                }))
              }
            />
          </div>
        )}
        {isMobile && (
          <button onClick={onClose}>
            <img src={search_white} />
            search
          </button>
        )}
      </BigInputContainer>
    </Overlay>
  )
}

export default BigSearch
