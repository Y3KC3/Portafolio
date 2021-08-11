import { Component } from 'react';
import Presentation from './components/Presentation';
import ImageContent from './components/ImageContent';
import ArrowLeft from './piecesParts/Arrow-left';
import ArrowRight from './piecesParts/Arrow-right';
import ArrowDown from './piecesParts/Arrow-down';
import ArrowUp from './piecesParts/Arrow-up';
import PresentationRight from './components/PresentationRight';
import PresentationRight2 from './components/PresentationRight2';
import SecondPart from './components/SecondPart';
import Squares from './components/animations/Squares';
import TimeCycle from './components/TimeCycle';
import TimerOptions from './components/invisibleComponents/TimerOptions';
import TheTimerFinished from './components/invisibleComponents/TheTimerFinished';
import CollaborationDescription from './components/CollaborationDescription';
import Calculator from './components/Calculator';
import NightMode from './components/NightMode';
import Store from './components/Store';
import Share from './components/invisibleComponents/Share';

class App extends Component {
  render (){
    return (
      <div className="app">
        <div className="partLeft">
          <div className="invisibleContent"></div>
          <div className="leftUnion left">
            <Presentation/>
            <ImageContent/>
          </div>
          <ArrowLeft/>
          <ArrowDown/>
        </div>
        <div className="partRight right">
          <div id="inputConfirmation"></div>
          <div className="invisibleContent2 d-none"></div>
          <ArrowUp/>
          <ArrowRight/>
          <PresentationRight/>
          <PresentationRight2/>
          <SecondPart/>
          <Squares/>
          <div className="unifying" id="unifying">
            <TimeCycle/>
            <CollaborationDescription/>
            <Calculator/>
          </div>
          <NightMode/>
          <Store/>
          <TimerOptions/>
          <TheTimerFinished/>
          <Share/>
        </div>
      </div>
    );
  };
};

export default App;