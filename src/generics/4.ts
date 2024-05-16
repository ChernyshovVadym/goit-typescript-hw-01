type TUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<TUser>) {
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
