import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard"
import "@testing-library/jest-dom"
import { RestaurantMockData } from "../utils/mocks/MockRestaurantCardData"

it("Should render Restaurannt Card Component with props data", () => {

    render(<RestaurantCard resData={RestaurantMockData} />)
    
    var resName = screen.getByText(
			"Boba Bhai - Bubble Tea & Korean Street Food"
    );
    
    expect(resName).toBeInTheDocument();
})

it("Should render Restaurannt Card Component with Promoted Label", () => {
    
    const PromotedResCard = withPromotedLabel(RestaurantCard)

	render(<PromotedResCard resData={RestaurantMockData} />);
    
    var promotedLabel = screen.getByText("Promoted")

	expect(promotedLabel).toBeInTheDocument();
});