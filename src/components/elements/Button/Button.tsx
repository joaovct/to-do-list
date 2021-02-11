import styled from "styled-components";
import colors from '../../../styles/colors'
import metrics from '../../../styles/metrics'

const Button = styled.button`
    border-width: ${metrics.border.button.width};
    border-style: ${metrics.border.button.style};
    border-color: ${colors.border.button};
    border-radius: ${metrics.border.button.radius};
    font-size: ${metrics.font.button.size};
    font-weight: ${metrics.font.button.weight};
    letter-spacing: ${metrics.font.button.letterSpacing};
    padding: ${metrics.padding.button.all};
    background: ${colors.background.button};
    color: ${colors.font.button};
    cursor: pointer;
`

export default Button