import React from "react";

import { Grid } from "@mui/material";
import { PriceItem, LinkButton } from "../../components";
import { priceData } from "../../constants";

import "./PriceList.css";

const PriceList = () => {
  return (
    <div id="price-content-section" className="content-section">
      <div id="classic-section">
        <h2 id="lashes">Classic</h2>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.classicLashes.map((lash, index) => (
            <Grid key={0} item xs={12} sm={4} md={2} id="classic-lashes">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.classicInfills.map((lash, index) => (
            <Grid key={1} item xs={12} sm={4} md={2} id="classic-infills">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>
        <LinkButton
          text="Book Now"
          link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
        />
      </div>

      <div id="volume-section">
        <h2>Volume</h2>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.volumeLashes.map((lash, index) => (
            <Grid key={0} item xs={12} sm={4} md={4} lg={2} id="volume-lashes">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.volumeInfills.map((lash, index) => (
            <Grid key={1} item xs={12} sm={4} md={4} lg={2} id="volume-infills">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>
        <LinkButton
          text="Book Now"
          link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
        />
      </div>

      <div id="removal-section">
        <h2>Removal</h2>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.lashRemovals.map((lash, index) => (
            <Grid key={0} item xs={12} md={5} lg={2} id="lash-removal">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>
        <LinkButton
          text="Book Now"
          link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
        />
      </div>
      <div id="lift-section">
        <h2>Lash Lifts</h2>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {priceData.lashLifts.map((lash, index) => (
            <Grid key={1} item xs={12} md={5} id="lash-lift">
              <PriceItem
                key={lash.title + index}
                title={lash.title}
                time={lash.time}
                price={lash.price}
              />
            </Grid>
          ))}
        </Grid>
        <LinkButton
          text="Book Now"
          link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
        />
      </div>
    </div>
  );
};

export default PriceList;
