import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SocialButtons from "@/components/Buttons/SocialButtons";

describe("Test the buttons render the right text when a prop is passed", () => {
  test("test with prop", () => {
    const text = true;
    render(<SocialButtons text={text} />);
    const googleButton = screen.getByText(/Sign up with Google/i);
    const githubButton = screen.getByText(/Sign up with Github/i);

    expect(googleButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
  });
  test("test with out prop", () => {
    render(<SocialButtons />);
    const googleButton = screen.getByText(/Log in with Google/i);
    const githubButton = screen.getByText(/Log in with Github/i);

    expect(googleButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
  });
});
