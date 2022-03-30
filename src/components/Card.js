import styled from 'styled-components';
import BookmarkButton from './BookmarkButton';

export default function PlantCard({
  name,
  fact,
  water,
  spot,
  info,
  img,
  onBookmarkClick,
  isBooked,
  id,
}) {
  function handleBookmark(event) {
    event.preventDefault();
    onBookmarkClick(id);
  }
  return (
    <Card isBooked={isBooked}>
      <BookmarkButton onClick={handleBookmark} isBooked={isBooked} />
      <div>
        <Name>
          <PlantIcon>
            <svg
              width="40"
              height="40"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2692 1.06583C14.6367 7.2275 17.1467 18.1042 17.1467 18.1042L19.0192 14.5583L23.2692 1.06583ZM23.2692 1.06583C26.8067 11.0642 18.5133 18.5342 18.5133 18.5342L19.0133 14.5558L23.2692 1.06583ZM8.18333 3.00417C12.645 3.29583 16.3633 7.83833 16.3633 7.83833C15.2496 10.4603 14.9443 13.3551 15.4867 16.1517C11.3533 12.5325 7.52 8.77917 8.1825 3.00417H8.18333ZM0.456667 16.9317C5.54893 20.2687 11.3712 22.3278 17.4292 22.9342C14.3975 15.9167 9.01 13.4008 0.456667 16.9317V16.9317ZM18.6242 22.8958C27.8117 22.43 35.5342 17.0525 35.5433 17C27.7267 13.6292 22.0492 15.5008 18.6242 22.8958Z"
                stroke="#4ECB71"
                stroke-width="0.833333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </PlantIcon>
          {name}
        </Name>
        <PlantPic>{img}</PlantPic>
      </div>
      <List role="list">
        <Info>Interesting and useful facts:</Info>
        <li>{fact}</li>
        <Info>Water intake:</Info>
        <li>{water}</li>
        <Info>Plant spot:</Info>
        <li>{spot}</li>
        <Info>Additional info:</Info>
        <li>{info}</li>
      </List>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 50px;
  background-color: #f2e8df;
  border-radius: 3%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;
`;
const Name = styled.h2`
  font-size: 20 px;
  display: flex;
  justify-content: left;
  color: #5c9875;
`;

const List = styled.ul`
  list-style: none;
  color: #590202;
`;
const Info = styled.dl`
  font-weight: bold;
  color: #5c9875;
`;

const PlantIcon = styled.div`
  margin: 3px 5px 0px 5px;
`;

const PlantPic = styled.section`
  border-radius: 100%;
`;
