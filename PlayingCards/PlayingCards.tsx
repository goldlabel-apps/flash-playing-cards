import React from "react";
import "./theme/playingCardsStyle.css";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  useFeatureDispatch,
  useFeatureSelect,
  selectShared,
  Notification,
  Flash,
  MovieClip,
  setDimensions,
} from "../../Features";
import {
  CardBack,
  Face,
  Appshell,
  resizePlayingCards,
  playingCardsAS,
  selectPlayingCards,
  playingCardsTheme,
} from "../../Features/PlayingCards";

function debounce(fn: any, ms: number) {
  let timer: any
  return (_:any) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      // @ts-ignore
      fn.apply(this, arguments)
    }, ms)
  }
}

export function PlayingCards() {
  const dispatch = useFeatureDispatch();
  const shared = useFeatureSelect(selectShared);
  const playingCards = useFeatureSelect(selectPlayingCards);
  const {side} = playingCards;
  const {screenDimensions, lightDark} = shared;

  React.useEffect(() => {
    const {initted} = playingCards;
    if (!initted){
      dispatch(setDimensions());
      dispatch(playingCardsAS("SETUP"));
    };
  }, [playingCards, dispatch]);

  React.useEffect(() => {
    const debouncedResize = debounce(function handleResizeEvent() {
      dispatch(setDimensions());
      dispatch(resizePlayingCards());
    }, 250);
    window.addEventListener("resize", debouncedResize);
  }, [shared, dispatch]);

  if (!screenDimensions) return null;
  const { width, height} = screenDimensions;
  
  return (
    // @ts-ignore
    <ThemeProvider theme={createTheme(playingCardsTheme(lightDark))}>
      <Appshell>
        <Notification />
        <Flash 
          stage="playingCardsStage"
          backgroundColor="none"
          height={height - 65}
          width={width - 240}>
          <MovieClip 
            mcId="cardClip"
            mcHeight={251}
            mcWidth={181}> 
            {side === "back" ? <CardBack /> : <Face /> }
          </MovieClip>
        </Flash>
      </Appshell>
    </ThemeProvider>
  );
};

