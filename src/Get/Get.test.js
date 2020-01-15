import React, { useEffect } from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import Get from "./Get";

//https://dev.to/joepurnell1/how-i-m-testing-my-custom-react-hook-with-enzyme-and-jest-1deo
// Test hooks

describe("Get", () => {
  it("fetch data", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });

    const spy = jest.spyOn(window, "fetch");

    const component = mount(<Get url='url'>{() => <p>Data loaded</p>}</Get>);

    act(() => {
      spy.mockImplementation(() => mockFetchPromise);
    });

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});
