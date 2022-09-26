import { shallowMount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Button from "../Button";

describe("Button", () => {
  test("mount correctly", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "button text",
      },
    });
    expect(wrapper.text()).toBe("button text");
  });

  test("test defalut color", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "button text",
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("defalut color props", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "button text",
      },
      props: {
        color: "red",
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
