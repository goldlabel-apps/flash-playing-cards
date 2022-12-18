import {PlayingCards} from "./PlayingCards";
import {playingCardsAS} from "./playingCardsAS";

import {resizePlayingCards} from "./actions/resizePlayingCards";
import {onLogoClick} from "./actions/onLogoClick";
import {onCtaClick} from "./actions/onCtaClick";
import {flipCard} from "./actions/flipCard";
import {changeCard} from "./actions/changeCard";

import CardBack from "./svg/CardBack";
import CardFront from "./svg/CardFront";
import Rank from "./svg/Rank";
import Suit from "./svg/Suit";
import Diamond from "./svg/Diamond";
import Heart from "./svg/Heart";
import Spade from "./svg/Spade";
import Club from "./svg/Club";
import {Actions} from "./components/Actions";
import Appshell from "./components/Appshell";
import {Cta} from "./components/Cta";
import {Face} from "./components/Face";
import {Logo} from "./components/Logo";
import {Fontify} from "./components/Fontify";
import SelectSuit from "./components/SelectSuit";
import SelectRank from "./components/SelectRank";

import {playingCardsTheme} from "./theme/playingCardsTheme";
import {
    selectPlayingCards, 
    setPlayingCardsKey,
} from "./slice";

export {
    CardBack,
    CardFront,
    Rank,
    Suit,
    PlayingCards,
    playingCardsTheme,
    playingCardsAS,
    flipCard,
    resizePlayingCards,
    changeCard,
    onLogoClick,
    onCtaClick,
    selectPlayingCards, 
    setPlayingCardsKey,
    Cta,
    Actions,
    Logo,
    Face,
    Fontify,
    Diamond,
    Heart,
    Spade,
    Club,
    SelectSuit,
    SelectRank,
    Appshell,
};
