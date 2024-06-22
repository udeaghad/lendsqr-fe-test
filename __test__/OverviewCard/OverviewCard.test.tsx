import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import OverviewCard from "../../app/components/OverviewCard/OverviewCard";


describe('OverviewCard', () => {
  const props = {
    icons: '/path/to/icon.png',
    title: 'Test Title',
    count: '12345'
  };

  it('should render the card icon', () => {
    render(<OverviewCard icons={props.icons} title={props.title} count={props.count} />);
    expect(screen.getByTestId('card_icon')).toBeInTheDocument();
  });

  it('should render the card title', () => {
    render(<OverviewCard icons={props.icons} title={props.title} count={props.count} />);
    expect(screen.getByTestId('card_title')).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('should render the card count', () => {
    render(<OverviewCard icons={props.icons} title={props.title} count={props.count} />);
    expect(screen.getByTestId('card_count')).toBeInTheDocument();
    expect(screen.getByText('12,345')).toBeInTheDocument();
  });

  it('should format the count number', () => {
    render(<OverviewCard icons={props.icons} title={props.title} count={props.count} />);
    expect(screen.getByText('12,345')).toBeInTheDocument();
  });

  it('should render the correct icon', () => {
    render(<OverviewCard icons={props.icons} title={props.title} count={props.count} />);
    expect(screen.getByAltText('icon')).toBeInTheDocument();
  });

});
