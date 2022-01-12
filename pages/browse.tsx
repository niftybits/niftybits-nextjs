import { ReactElement, useEffect, useState } from "react";
import ListingFilters from "components/ListingFilters";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardCarousel from "components/CardCarousel";
import { styled } from "@mui/material/styles";
import Layout from "components/Layout";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import Typography from "@mui/material/Typography";
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps,
} from "@mui/base/ButtonUnstyled";

import type { NextPageWithLayout } from "./random2398";
import CollapseContent from "components/CollapseContent";
import ListingGrid from "components/ListingGrid";
import { useLazyGetListingsQuery } from "services/listings";

const AsideSidebar = styled("aside")(
  ({ theme }) => `
  margin-top: 40px;
  width: 300px;
  border: solid 1px ${theme.palette.divider};
  border-bottom: none;
`
);

const StyledMain = styled("main")`
  flex: 1 1;
  padding: 1em;
`;

const Browse: NextPageWithLayout = () => {
  const [expanded, setExpanded] = useState(false);
  const [fetchedListings, setFetchedListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [getListingsData, listingsData, loading] = useLazyGetListingsQuery();

  useEffect(() => {
    console.log("listingsData effect", listingsData);
    console.log("currentPage", currentPage);
    if (listingsData?.data?.page) {
      console.log("setting fetched listings", listingsData);
      setFetchedListings((state: any) => {
        return [...state, ...listingsData?.data?.data];
      });
    }
  }, [listingsData, currentPage]);

  console.log("listingsData", listingsData);

  const fetchMore = async () => {
    console.log("fetchMore");
    setCurrentPage((state) => ++state);
    const listingsResult = await getListingsData(currentPage);
    console.log("listingsResult", listingsResult);
  };

  return (
    <Box display="flex" alignItems="flex-start">
      <AsideSidebar>
        <section>
          <ListingFilters />
        </section>
      </AsideSidebar>

      <StyledMain>
        <ListingGrid listings={fetchedListings} />
        <Button
          fullWidth
          variant="contained"
          sx={{ marginTop: "1em" }}
          onClick={fetchMore}
          disabled={listingsData?.isLoading}
        >
          Load more
        </Button>
      </StyledMain>
    </Box>
  );
};

Browse.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Browse;
