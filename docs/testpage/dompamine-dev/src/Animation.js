const slideInDown = (id)=>{ 
    return `
${id} {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    }
    @-webkit-keyframes slideInDown {
    0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    }
    }
    @keyframes slideInDown {
    0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    }
    } 
`
}

const slideInLeft = (id)=>{
    return `
    ${id} {
        -webkit-animation-name: slideInLeft;
        animation-name: slideInLeft;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        @-webkit-keyframes slideInLeft {
        0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
        }
        @keyframes slideInLeft {
        0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
        } `
}

const slideInRight = (id,)=>{
    return `
    ${id} {
        -webkit-animation-name: slideInRight;
        animation-name: slideInRight;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        @-webkit-keyframes slideInRight {
        0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
        }
        @keyframes slideInRight {
        0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
        } 
    `
}

const slideInUp = (id)=>{
    return `
    ${id} {
        -webkit-animation-name: slideInUp;
        animation-name: slideInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        @-webkit-keyframes slideInUp {
        0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }
        }
        @keyframes slideInUp {
        0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }
        } 
    `
}

export default Animation = {
    "slideInDown" : slideInDown,
    "slideInLeft" : slideInLeft,
    "slideInUp" : slideInUp,
    "slideInRight" : slideInRight

}