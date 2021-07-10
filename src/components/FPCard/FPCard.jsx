import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SmallProfileCard from '../SmallProfileCard/SmallProfileCard'

const FPCard = (props) => {
  if (props.overlay)
    return (
      <Card className="text-white" style={{ width: `${props.width}rem` }}>
        <Card.Img variant="top" src={props.imgSrc} alt="" />
        <Card.ImgOverlay>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
          <Card.Title>{props.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    )

  return (
    <Card style={{ width: `${props.width}rem` }}>
      <Card.Img variant="top" src={props.imgSrc} alt="" />
      <Card.Body>
        <SmallProfileCard
          profilePicture={props.profilePicture}
          name={props.title}
          job={props.subtitle}
        />
      </Card.Body>
    </Card>
  )
}

FPCard.propTypes = {
  overlay: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  profilePicture: PropTypes.string,
}

FPCard.defaultProps = {
  overlay: true,
  width: 18,
  title: "",
  subtitle: "",
  imgSrc: "https://picsum.photos/200/300",
  profilePicture: "",
}


export default FPCard
