/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "../../../StyledTag";
import EditMenuBtn from "../EditMenuBtn";
import ToggleBtn from "../../../ToggleBtn";

const VenueItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.2rem 0.5rem;
  border-bottom: 2px solid var(--color-grey-800);
  border-radius: 1rem;

  &:hover {
    border-bottom: 3px solid var(--color-grey-400);
  }
`;

const ImageAndNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PriceAndBtnDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VenueItemNum = styled.span`
  span {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }
`;

const VenueItemImgDiv = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 1rem;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
`;

const VenueItemTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const VenueItemTextDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 80%;
`;

const VenueItemName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const VenueItemPriceSizeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const VenueItemTextSm = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 1.15rem;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  gap: 1rem;
`;
const VenueItemTextBg = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-grey-200);
  font-size: 2rem;
`;

function EditVenueItemCard({ item }) {
  return (
    <VenueItem>
      <ImageAndNameDiv>
        <VenueItemNum>
          <span>01</span>
        </VenueItemNum>
        <VenueItemImgDiv>
          <img
            src={`./img/${item.images[0] || "Table-001.jpg"}`}
            alt="Venue-item"
          />
        </VenueItemImgDiv>
        <VenueItemTextDiv>
          <VenueItemName>
            <VenueItemTextBg>{item.name}</VenueItemTextBg>
          </VenueItemName>
          {/* <StyledTag type={item.type}>{item.type}</StyledTag> */}
        </VenueItemTextDiv>
      </ImageAndNameDiv>

      <PriceAndBtnDiv>
        <VenueItemTextDiv2>
          <VenueItemPriceSizeDiv>
            <VenueItemTextSm>
              Available :- <ToggleBtn itemId={item._id} />{" "}
            </VenueItemTextSm>
          </VenueItemPriceSizeDiv>
          <VenueItemPriceSizeDiv>
            <VenueItemTextSm>Price/Day :- ${item.pricePerDay}</VenueItemTextSm>
          </VenueItemPriceSizeDiv>

          <VenueItemPriceSizeDiv>
            <VenueItemTextSm>
              Good for occassions :- {item.goodForOcassions.join(", ")}
            </VenueItemTextSm>
          </VenueItemPriceSizeDiv>
        </VenueItemTextDiv2>

        <EditMenuBtn
          itemId={item._id}
          itemCategory={item.category}
          // handleDeleteVenueItem={handleDeleteVenueItem}
        />
      </PriceAndBtnDiv>
    </VenueItem>
  );
}

export default EditVenueItemCard;
