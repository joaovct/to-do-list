export const font = {
    input: {
        size: "16px",
        weight: "400",
        letterSpacing: "initial"
    },
    button: {
        size: "16px",
        weight: "400",
        letterSpacing: "initial"
    },
    text: {
        size: "16px",
        weight: "400",
        letterSpacing: "initial"
    }
}

const inputPadding = {
    top: "8px",
    right: "12px",
    bottom: "8px",
    left: "12px",
}

const buttonPadding = {
    top: "10px",
    right: "12px",
    bottom: "10px",
    left: "12px", 
}

export const padding = {
    input: {
        ...inputPadding,
        all: `${inputPadding.top} ${inputPadding.right} ${inputPadding.bottom} ${inputPadding.left}`
    },
    button: {
        ...buttonPadding,
        all: `${buttonPadding.top} ${buttonPadding.right} ${buttonPadding.bottom} ${buttonPadding.left}`
    }
}

export const border = {
    input: {
        width: "1px",
        radius: "8px",
        style: "solid"
    },
    button: {
        width: "1px",
        radius: "8px",
        style: "solid"
    },
    default: {
        width: "1px",
        radius: "8px",
        style: "solid"
    }
}

export const effect = {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
}

const exportDefault = {
    font,
    padding,
    border,
    effect
}

export default exportDefault