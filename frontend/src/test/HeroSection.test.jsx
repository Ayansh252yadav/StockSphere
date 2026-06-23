import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "../landing_page/home/HeroSection";

describe("HeroSection component", () => {
  test("renders hero image", () => {
    render(<HeroSection />);
    const heroImage = screen.getByAltText("Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", expect.stringContaining("homeHero"));
  });
  test("render signUp Button ", () => {
    render(<HeroSection />);
    const signButton = screen.getByRole('button', { name: /Sign up for free/i });
    expect(signButton).toBeInTheDocument();
    expect(signButton).toHaveClass('hello');
  });
});