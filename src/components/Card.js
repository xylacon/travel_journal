const Card = ({ image, location, country, startDate, endDate, description, gMapsLink }) => {
	if (!image) {
		image = "no-image.jpeg"
	}
	return (
		<div className="card">
			<div className="img-container">
				<img src={`images/${image}`} alt="" />
			</div>
			<div className="card-body">
				<div className="country-container">
					<i className="fa-solid fa-location-dot" />
					<p className="country">{country}</p>
					<a className="g-maps" href={gMapsLink}>View on Google Maps</a>
				</div>
				<h1 className="location">{location}</h1>
				<h3 className="dates">{startDate} – {endDate}</h3>
				<p className="description">{description}</p>
			</div>
		</div>
	)
}

export default Card