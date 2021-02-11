import styled from "styled-components";
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'

const Input = styled.input`
    min-width: 120px; 
    border-width: ${metrics.border.input.width};
    border-style: ${metrics.border.input.style};
    border-color: ${colors.border.input};
    border-radius: ${metrics.border.input.radius};
    font-size: ${metrics.font.input.size};
    font-weight: ${metrics.font.input.weight};
    letter-spacing: ${metrics.font.input.letterSpacing};
    padding: ${metrics.padding.input.all};
    background: ${colors.background.input};
    color: ${colors.font.input};
`

export default Input