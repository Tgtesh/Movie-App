import React from 'react'
import Button from '../Button'
import DetailContainer from '../DetailContainer'
import Details from '../Details'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Sheded from '../Shaded'
import SubTitles from '../SubTitles'
import Title from '../Title'

const MovieDetails = (props) => {
    return (
        <div>
            {props.show &&(
                <DetailContainer>
            <div>
            <img src={props.Details.Poster} alt="broken image"></img>
            </div>
            <Details>
            <Title>{props.Details.Title}</Title>
            <Flex>
            <Sheded>{props.Details.Rated}</Sheded>
            <Sheded>{props.Details.Runtime}</Sheded>
            </Flex>
            <Sheded>{props.Details.Genre}</Sheded>
            <SubTitles>Plot</SubTitles>
            <Paragraph>{props.Details.Plot}</Paragraph>
            <SubTitles>Actors</SubTitles>
            <Paragraph>{props.Details.Actors}</Paragraph>
            </Details>
            <div>
            {/* <div>{props.Details.Ratings[0].Value}</div> */}
            </div>
            <div>
            <Button onClick={()=>props.setShow(false)}>Close</Button></div>
            </DetailContainer>
            )}
        </div>
    )
}

export default MovieDetails
