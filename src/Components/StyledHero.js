import styled from 'styled-components'
import defaultBcg from '../images/room-1.jpeg'

const StyledHero = styled.header`
  margin-top: 66px;
  min-height: 60vh;
  background: url(${props=>props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;`

export default StyledHero