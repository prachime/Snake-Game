let inputDirection={x:0,y:0}
let lastInputDirection={x:0,y:0}

window.addEventListener('keydown', e=>{
    switch (e.key)
    {
        case 'ArrowUp':
            if(e.key==="ArrowUp" &&lastInputDirection.y===0)
            inputDirection={x:0,y:-1};
            break;
        case 'ArrowDown':
            if(e.key==="ArrowDown" && lastInputDirection.y===0)
            inputDirection={x:0,y:1}
            break;
        case 'ArrowLeft':
            if(e.key==="ArrowLeft"&&lastInputDirection.x===0)

            inputDirection={x:-1,y:0}
            break;
        case 'ArrowRight':
            if(e.key==="ArrowRight"&&lastInputDirection.x===0)
            inputDirection={x:1,y:0}
            break;
    }
})
export function getInputDirection()
{
    lastInputDirection=inputDirection
    return inputDirection
}