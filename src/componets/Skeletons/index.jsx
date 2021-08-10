import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.5s;
    }
    50%{
          opacity: 0.8s;
    }
    100%{
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: ${(props) => props.theme.colors.backgroudcard};
    border-radius: 6px;
    margin-bottom: 0.5rem;
    min-width: ${(props) => props.width};
    min-height:  ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

const Skeletons = ({width, height}) => <LoadingSkeleton width={width} height={height}/>;
export default Skeletons;