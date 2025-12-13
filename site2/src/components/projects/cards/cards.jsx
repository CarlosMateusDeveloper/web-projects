import './cards.css'
export default function Cards({image , subtitle , title , date }){
    return(
        <div className='card rounded-0' style={{width: '17rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title subtitle text-secondary">{subtitle}</h6>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title date">{date}</h6>
                <p className="card-text text-secondary text-project">Construction of a two-story house with columns, foundations, floor, ceilings and others. </p>
            </div>
        </div>
    )
}