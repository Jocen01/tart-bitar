
function RenderRekResultat ({höjd, bredd, längd }) {
    return(
        <div>
            <h2>Små Bitar: {höjd * bredd * längd / 175} </h2>
            <h2>Mellan Bitar: {höjd * bredd * längd / 200} </h2>
            <h2>Stora Bitar: {höjd * bredd * längd / 225} </h2>
        </div>
    )
}

function RenderRundResultat({  höjd, radie }) {
    return(
        <div>
            <h2>Små Bitar: {höjd * radie * radie * 3.141592 / 175} </h2>
            <h2>Mellan Bitar: {höjd * radie * radie * 3.141592 / 200} </h2>
            <h2>Stora Bitar: {höjd * radie * radie * 3.141592 / 225} </h2>
        </div>
    )
}

function BeräknaBitar (props){
    return(
        <div>
            {props.beräknaRek ? 
            <RenderRekResultat 
                höjd={props.höjd} 
                bredd={props.bredd} 
                längd={props.längd} 
            /> : 
            <RenderRundResultat 
                höjd={props.höjd} 
                radie={props.radie} 
            />}
        </div>

    )
}

BeräknaBitar.defaultProps = {
    höjd: 0,
    bredd: 0,
    längd: 0 ,
    radie: 0,
    beräknaRek: true,
}

export default BeräknaBitar;