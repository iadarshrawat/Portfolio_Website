import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './../assets/data.json'

function Work() {
  return (
    <>
   <div className="container">
    <h1 style={{textAlign: 'center', color: 'white', margin:'10px'}}>Projects</h1>
    <div id='work' style={{overflow: 'scroll', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '10px', justifyContent: 'center', color: 'red'}}>
  {data.projects.map((item, index) => (
    <Card key={index} style={{ margin: '10px' }}>
      <Card.Img variant="top" src={item.imgSrc} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /> {/* Assuming each project object has an 'imageSrc' property */}
      <Card.Body>
        <Card.Title>{item.title}</Card.Title> {/* Assuming each project object has a 'title' property */}
        <Card.Text>
          {item.description} {/* Assuming each project object has a 'description' property */}
        </Card.Text>
        <Button variant="danger" href={item.url}>Go somewhere</Button> {/* Assuming each project object has a 'url' property */}
      </Card.Body>
    </Card>
  ))}
</div>
    </div>
    
    </>
    
  )
}

export default Work