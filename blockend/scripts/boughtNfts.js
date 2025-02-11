import { useQuery, gql } from "@apollo/client";

const GET_BOUGHT_ITEMS = gql`
  {
    boughtItems(first: 5, where: { buyer: "0x00000000" }) {
      id
      buyer
      seller
      nftAddress
      tokenId
      price
    }
  }
`;

export default function GraphExample() {
  const { loading, error, data } = useQuery(GET_BOUGHT_ITEMS);
  console.log(data);

  // continue with NFTPort fetching NFTs from IPFS
}
