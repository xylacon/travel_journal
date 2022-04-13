import cardData from '../card-data.json'
import Card from './Card'

const Cards = () => {
	const cards = cardData.map((card) => {
    return <Card
      key={card.id}
      image={card.image}
      location={card.location}
      country={card.country}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      gMapsLink={card.gMapsLink}
    />
  });

	return (
		<section className="cards">
			{cards}
		</section>
	)
}

export default Cards