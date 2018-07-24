import React from 'react';
import styled from 'styled-components';
import {getRandomIndex, rotate, toValueString, wrap} from 'utils/array-util';

const StyledSvg = styled.svg`
  animation: Reveal 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  height: 100vh;
  pointer-events: none;
  position: absolute;
  width: 100vw;

  @keyframes Reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default class AnimatedGradient extends React.Component {
  constructor(props) {
    super(props);

    const theme = [
      'rgb(26, 128, 130)', // blue
      'rgb(97, 158, 82)', // green
      'rgb(219, 184, 65)', // yellow
      'rgb(227, 119, 39)', // orange
      'rgb(207, 55, 54)', // red
    ];
    const duration = '20s';
    const randomIndex = getRandomIndex(theme);
    const colors = rotate(theme, randomIndex);
    const {length: numColors} = colors;
    const colors1 = toValueString(wrap(colors));
    const colors2 = toValueString(wrap(rotate(colors, -1)));
    const fxValues = toValueString(wrap(this.getFocusValues(numColors)));
    const fyValues = toValueString(wrap(this.getFocusValues(numColors)));
    const fxValuesWhite = toValueString(wrap(this.getFocusValues(numColors)));
    const fyValuesWhite = toValueString(wrap(this.getFocusValues(numColors)));
    const gradientID1 = `${StyledSvg.styledComponentId}--gradient1`;
    const gradientID2 = `${StyledSvg.styledComponentId}--gradient2`;
    const repeatCount = 'indefinite';

    this.state = {
      colors1,
      colors2,
      duration,
      fxValues,
      fxValuesWhite,
      fyValues,
      fyValuesWhite,
      gradientID1,
      gradientID2,
      randomIndex,
      repeatCount,
      theme,
    };
  }

  getFocusValues(length) {
    return Array.from({length}).map(() => Math.random());
  }

  render() {
    return (
      <StyledSvg>
        <defs>
          {/* Multicolor gradient */}
          <radialGradient fx={0} fy={0} id={this.state.gradientID1} r={'100%'}>
            <animate
              attributeName={'fx'}
              attributeType={'XML'}
              dur={this.state.duration}
              repeatCount={this.state.repeatCount}
              values={this.state.fxValues}
            />
            <animate
              attributeName={'fy'}
              attributeType={'XML'}
              dur={this.state.duration}
              repeatCount={this.state.repeatCount}
              values={this.state.fyValues}
            />
            <stop
              offset={0}
              stopColor={this.state.theme[this.state.randomIndex]}>
              <animate
                attributeName={'stop-color'}
                attributeType={'XML'}
                dur={this.state.duration}
                repeatCount={this.state.repeatCount}
                values={this.state.colors1}
              />
            </stop>
            <stop
              offset={1}
              stopColor={this.state.theme[this.state.randomIndex]}>
              <animate
                attributeName={'stop-color'}
                attributeType={'XML'}
                dur={this.state.duration}
                repeatCount={this.state.repeatCount}
                values={this.state.colors2}
              />
            </stop>
          </radialGradient>

          {/* White gradient */}
          <radialGradient fx={0} fy={0} id={this.state.gradientID2} r={'100%'}>
            <animate
              attributeName={'fx'}
              attributeType={'XML'}
              dur={this.state.duration}
              repeatCount={this.state.repeatCount}
              values={this.state.fxValuesWhite}
            />
            <animate
              attributeName={'fy'}
              attributeType={'XML'}
              dur={this.state.duration}
              repeatCount={this.state.repeatCount}
              values={this.state.fyValuesWhite}
            />
            <stop offset={0} stopColor={'white'} stopOpacity={1 / 3} />
            <stop offset={1} stopColor={'white'} stopOpacity={0} />
          </radialGradient>
        </defs>

        <rect
          fill={`url(#${this.state.gradientID1})`}
          height={'100%'}
          width={'100%'}
        />
        <rect
          fill={`url(#${this.state.gradientID2})`}
          height={'100%'}
          width={'100%'}
        />
      </StyledSvg>
    );
  }
}
