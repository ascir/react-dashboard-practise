import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px auto 300px 300px;
    `
export default function(){
    return <Bar>
        <div>Web Platform</div>
        <div />
        <div>Control Center</div>
        <div> Settings</div>
        </Bar>
};