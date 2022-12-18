import React from "react";
import {
  Box,
} from "@mui/material";
import {
  useFeatureSelect,
  MovieClip,
} from "../../../Features/";
import {
  Diamond,
  Heart,
  Club,
  Spade,
  CardFront,
  selectPlayingCards,
  Rank,
} from "../../../Features/PlayingCards";

export function Face() {

  const playingCards = useFeatureSelect(selectPlayingCards);
  const {suit} = playingCards;
  // console.log("suit,rank", suit,rank)
  return (
    <Box sx={{position:"relative"}}>

        <MovieClip 
          mcId="suitClip"
          mcHeight={512}
          mcWidth={512}
          opacity={1}
          scale={0.25}
          left={55}
          top={110}
          bordered={false}> 
          { suit === "D" ? <Diamond /> : null}
          { suit === "H" ? <Heart /> : null}
          { suit === "C" ? <Club /> : null}
          { suit === "S" ? <Spade /> : null}
        </MovieClip>
          
        <MovieClip 
          mcId="rankClip"
          mcHeight={25}
          mcWidth={15}
          opacity={1}
          scale={3.5}
          left={25}
          top={25}
          bordered={false}> 
          <Rank />
        </MovieClip>
        <CardFront /> 
    </Box>
  );
};
