import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    html, body, #root{
        min-height: 100vh;
        min-height: -webkit-fill-available;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    table{
        border-collapse: collapse;
        border-spacing: 0;
    }
    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    *,
    button,
    input{
        font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        background: none;
    }
    img, svg{
        user-select: none;
    }
`