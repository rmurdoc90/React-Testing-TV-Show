import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes"

const season = [
    {
      id: 553946,
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
      }
    }
  ];

test('renders Episodes', () =>{

   const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId(/episode-card/i)).toHaveLength(0)

    rerender(<Episodes episodes={season}/>)

    expect(queryAllByTestId(/episode-card/i)).toHaveLength(1)
})