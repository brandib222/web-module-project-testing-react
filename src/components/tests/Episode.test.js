import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 1, 
    name: '',
    image: 'https://media.istockphoto.com/photos/surprised-rubber-chicken-head-close-up-isolated-on-white-picture-id1343859143?b=1&k=20&m=1343859143&s=170667a&w=0&h=QNk6q0HVj52M4XN1cVohcl45xq4qSREKCAEYfWfRCMU=',
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1
}

const testWithoutImage = {
    id: 1, 
    name: '',
    image: '',
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>);

});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode} />);
    const summary = screen.queryByText(/test summary/);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent();
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testWithoutImage} />);
    const image = screen.queryByAltText('.stranger_things.png');
    expect(image).toBeInTheDocument();
});
