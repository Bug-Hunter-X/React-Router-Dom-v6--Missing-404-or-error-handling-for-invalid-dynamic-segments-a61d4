To handle such cases gracefully, you should implement proper error handling.  One approach is to use React's error boundaries.  Another is to add a catch-all route to handle 404 scenarios.  This improved example uses a catch-all route for a cleaner solution:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function User({ params }) {
  const userId = params.userId;

  // Fetch user data based on userId. Handle potential errors here.
  const user = fetchUserData(userId);

  if (!user) {
    return <NotFound/>;
  }

  return (
    <div>User Details: {user.name}</div>
  );
}

function NotFound() {
  return (
    <div>404 - Not Found</div>
  );
}

function fetchUserData(userId) {
  // Simulate fetching user data. Replace with your actual API call.
  const users = {
    "1": { name: "John Doe" },
    "2": { name: "Jane Smith" },
  };
  return users[userId] || null;
}

export default App;
```

This updated code introduces a `NotFound` component and a catch-all route (`path="*"`) that will render whenever a route does not match any other defined routes, effectively handling the 404 scenario.