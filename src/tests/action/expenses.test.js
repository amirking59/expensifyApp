import { addExpense } from "../../actions/expenses";
import { removeExpense } from "../../actions/expenses";
import { editExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1230' });
    expect(action).toBe({
        type: 'REMOVE_EXPENSE',
        id: '1230'
    });
});