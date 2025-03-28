let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const getAllUsers = () => users;

const getUserById = (id) => {
  return users.find((user) => user.id === Number(id)) || null;
};

const createUser = (name) => {
  const newUser = { id: users.length + 1, name };

  users.push(newUser);

  return newUser;
};

const updateUser = (id, name) => {
  const user = getUserById(id);

  if (user) {
    user.name = name;

    return user;
  }

  return null;
};

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== Number(id));
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
