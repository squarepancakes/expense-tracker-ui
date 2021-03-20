import { shallowMount } from "@vue/test-utils";
import ExpenseList from "@/components/expense-dashboard/ExpenseList.vue";

describe("ExpenseList", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ExpenseList, {
			propsData: {
				expenseList: [
					{ date: new Date(), item: "shoe", price: 23 },
					{ date: new Date(), item: "cat", price: 123 },
				],
			},
		});
	});

	it("renders a table", () => {
		expect(wrapper.find("table"));
	});

	it("should have table headers", () => {
		const tableHeaders = ["Date", "Item Name", "Price"];
		const headers = wrapper.findAll("th");
		expect(headers.at(0).text()).toBe(tableHeaders[0]);
		expect(headers.at(1).text()).toBe(tableHeaders[1]);
		expect(headers.at(2).text()).toBe(tableHeaders[2]);
	});

	it("should render a list based on the expenseList provided", () => {
		const tableBody = wrapper.find("tbody");
		const numOfItems = tableBody.findAll("tr").length;
		expect(numOfItems).toBe(2);
	});

	it("should format the date to a valid format", () => {
		const tableItems = wrapper.findAll(".table__item");
		expect(tableItems.at(0).text()).toBe(new Date().toLocaleString("en-GB"));
	});

	it("should format the date to a valid format", () => {
		const tableBody = wrapper.find("tbody");
		const tableItems = tableBody.findAll("tr");
		const item = tableItems.at(1).findAll(".table__item");
		expect(item.at(1).text()).toMatch("cat");
		expect(item.at(2).text()).toBe("123");
	});
});
