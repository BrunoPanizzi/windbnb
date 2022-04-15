import propTypes from 'prop-types'

import star from '../../assets/star.svg'

import { Container } from './styles'

function Stay({
  beds,
  city,
  country,
  maxGuests,
  photo,
  rating,
  superHost,
  title,
  type,
}) {
  return (
    <Container>
      <img src={photo} />

      <div className="info">
        {superHost && <span className="super-host">SUPER HOST</span>}
        <span>
          {type}
          {beds && `. ${beds} beds`}
        </span>
        <div className="rating">
          <img
            src={star}
            alt="star"
          />
          {rating}
        </div>
        <h3>{title}</h3>
      </div>
    </Container>
  )
}

Stay.propTypes = {
  beds: propTypes.number,
  city: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  maxGuests: propTypes.number.isRequired,
  photo: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  superHost: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
}

Stay.defaultProps = {
  beds: 0,
}

export default Stay

