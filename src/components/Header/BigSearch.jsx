import { useState, useEffect, useRef } from 'react'

import search_white from '../../assets/search_white.svg'
import marker from '../../assets/marker.svg'

import { BigInputContainer, Overlay } from './styles'

import Input from '../Input'
import NumberSelect from '../NumberSelect'

function BigSearch({ onClose }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 630px)').matches
  )
  const [focus, setFocus] = useState()

  const [adultGuests, setAdultGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)

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
          />
          <Input
            placeholder="Add guests"
            label="Guests"
            innerRef={guestsInp}
          />
          {!isMobile && (
            <button>
              <img src={search_white} />
              search
            </button>
          )}
        </div>
        {focus === 'location' && (
          <div className="location">
            <div>
              <img
                src={marker}
                alt=""
              />{' '}
              Place
            </div>
            <div>
              <img
                src={marker}
                alt=""
              />{' '}
              Place
            </div>
            <div>
              <img
                src={marker}
                alt=""
              />{' '}
              Place
            </div>
            <div>
              <img
                src={marker}
                alt=""
              />{' '}
              Place
            </div>
            <div>
              <img
                src={marker}
                alt=""
              />{' '}
              Place
            </div>
          </div>
        )}
        {focus === 'guests' && (
          <div className="guests">
            <NumberSelect
              title="Adults"
              subtitle="Ages 13 or above"
              value={adultGuests}
              increment={() => setAdultGuests(p => p + 1)}
              decrement={() => setAdultGuests(p => p - 1)}
            />
            <NumberSelect
              title="Children"
              subtitle="Ages 2 - 12"
              value={childrenGuests}
              increment={() => setChildrenGuests(p => p + 1)}
              decrement={() => setChildrenGuests(p => p - 1)}
            />
          </div>
        )}
        {isMobile && (
          <button>
            <img src={search_white} />
            search
          </button>
        )}
      </BigInputContainer>
    </Overlay>
  )
}

export default BigSearch
