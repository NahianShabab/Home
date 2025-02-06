

const links = [
    {id:0,title:'YouTube',address:'https://www.youtube.com/@nahianshabab724'},
    {id:1,title:'GitHub',address:'https://github.com/NahianShabab'},
]

export default function Link(){

    return (
        <>
            <h3>You can find me here:</h3>
            <ul>
                {links.map(l=><LinkItem key={l.id} link={l}/>)}
            </ul>
        </>
    )

}

function LinkItem({link}){
    return <li><a href={link.address} target="_blank">{link.title}</a></li>
}