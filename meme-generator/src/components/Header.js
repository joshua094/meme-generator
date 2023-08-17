import trollface from '../images/Troll Face.png'

export default function Header () {
    return (
        <header className="header">
            <img src={trollface} alt="Troll Face" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Project 3</h4>
        </header>
    )
}