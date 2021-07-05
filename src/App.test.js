import { render, screen } from "@testing-library/react";
import App from "./App";

import { shallow, configure } from "enzyme";

import Adaptor from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adaptor() });

describe("Test App render", () => {
  test("render title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toContain("School App");
  });

  test("render Router", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route").length).toBe(2);
  });
});
