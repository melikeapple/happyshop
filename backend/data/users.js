import bcrcypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrcypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrcypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrcypt.hashSync('123456', 10),
  },
  {
    name: 'Melike',
    email: 'melike@example.com',
    password: bcrcypt.hashSync('123456', 10),
  },
]

export default users
