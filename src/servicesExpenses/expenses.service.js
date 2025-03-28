let idCounter = 1;

let expenses = [
  {
    id: '1',
    userId: 1,
    spentAt: '2024-12-24T15:14:23.103Z',
    title: 'string',
    amount: 0,
    category: 'string',
    note: 'string',
  },
  {
    id: '2',
    userId: 2,
    spentAt: '2024-12-25T15:14:23.103Z',
    title: 'string',
    amount: 0,
    category: 'string',
    note: 'string',
  },
  {
    id: '3',
    userId: 3,
    spentAt: '2024-12-26T15:14:23.103Z',
    title: 'string',
    amount: 0,
    category: 'string',
    note: 'string',
  },
];

const getAllExpenses = () => {
  return [...expenses];
};

const getExpenseById = (id) => {
  return expenses.find((expense) => expense.id === id) || null;
};

const createExpense = (userId, spentAt, title, amount, category, note) => {
  const newExpense = {
    id: idCounter++,
    userId,
    spentAt,
    title,
    amount,
    category,
    note,
  };

  expenses.push(newExpense);

  return newExpense;
};

const updateExpense = (id, uptatedExpenses) => {
  const expense = getExpenseById(id);

  if (expense) {
    Object.assign(expense, uptatedExpenses);

    return expense;
  }

  return null;
};

const deleteExpense = (id) => {
  expenses = expenses.filter((expense) => expense.id !== id);
};

const updateManyExpenses = (updatedExpenses) => {
  for (const { id, ...updates } of updatedExpenses) {
    const expense = getExpenseById(id);

    if (!expense) {
      continue;
    }

    Object.assign(expense, updates);
  }
};

const deleteManyExpenses = (ids) => {
  expenses = expenses.filter((expense) => !ids.includes(expense.id));
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
  updateManyExpenses,
  deleteManyExpenses,
};
